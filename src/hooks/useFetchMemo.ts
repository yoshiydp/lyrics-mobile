import { useEffect, useState, useCallback } from 'react';
import { DefaultService } from '@/apiClient/services/DefaultService';

export interface MemoType {
  id: string;
  title: string;
  body: string;
  updatedAt: Date;
  isBookmarked: boolean;
}

export function useFetchMemo() {
  const [memos, setMemos] = useState<MemoType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  const fetchMemo = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const res = await DefaultService.getMemo();
      setMemos(
        res.map((memo: any) => ({
          ...memo,
          updatedAt: new Date(memo.updatedAt),
        })),
      );
    } catch (err) {
      console.error('Failed to fetch memo:', err);
      setError(err as Error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchMemo();
  }, [fetchMemo]);

  return { memos, loading, error, refreshMemo: fetchMemo };
}
