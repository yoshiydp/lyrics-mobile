import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';
import { pathToFileURL, fileURLToPath } from 'url';

[
  '.svg',
  '.png',
  '.jpg',
  '.jpeg',
  '.gif',
  '.mp3',
  '.wav',
  '.ico',
  '.m4a',
  '.mov',
  '.mp4',
  '.webm',
].forEach((ext) => {
  require.extensions[ext] = () => {};
});

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DATA_DIR = path.resolve(__dirname, '../src/data');
const OUTPUT_YAML = path.resolve(__dirname, '../api/openapi.yaml');
const BASE_TEMPLATE = path.resolve(__dirname, '../api/templates/base.yaml');

async function loadTsModule(filePath: string) {
  const moduleUrl = pathToFileURL(filePath).href;
  const module = await import(moduleUrl);
  return module;
}

async function generateOpenAPI() {
  console.log('Generating OpenAPI YAML...');

  const baseYaml = yaml.load(fs.readFileSync(BASE_TEMPLATE, 'utf8')) as any;

  const files = fs.readdirSync(DATA_DIR).filter((f) => f.endsWith('.ts'));
  const dataEntries: Record<string, any> = {};

  for (const file of files) {
    const filePath = path.join(DATA_DIR, file);
    const mod = await loadTsModule(filePath);
    for (const [key, value] of Object.entries(mod)) {
      dataEntries[key] = value;
    }
  }

  baseYaml.components = baseYaml.components || {};
  baseYaml.components.examples = baseYaml.components.examples || {};

  for (const [key, value] of Object.entries(dataEntries)) {
    baseYaml.components.examples[key] = { value };
  }

  baseYaml.paths = baseYaml.paths || {};

  for (const key of Object.keys(dataEntries)) {
    const endpoint = `/data/${key.replace('_DATA', '').toLowerCase()}`;

    baseYaml.paths[endpoint] = {
      get: {
        summary: `Get ${key.replace('_DATA', '').toLowerCase()} data`,
        description: `Returns mock data for ${key}.`,
        operationId: `get${key.replace('_DATA', '')}`,
        responses: {
          '200': {
            description: 'OK',
            content: {
              'application/json': {
                examples: {
                  [key]: { $ref: `#/components/examples/${key}` },
                },
              },
            },
          },
        },
      },
    };
  }

  const yamlStr = yaml.dump(baseYaml, { noRefs: true });
  fs.writeFileSync(OUTPUT_YAML, yamlStr, 'utf8');

  console.log('OpenAPI YAML updated:', OUTPUT_YAML);
}

generateOpenAPI().catch((err) => {
  console.error('Error:', err);
  process.exit(1);
});
