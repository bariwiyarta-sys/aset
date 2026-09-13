import { useEffect, useState } from 'react'
import { supabase } from '../lib/supabase'

export function useAssets() {
  const [assets, setAssets] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const fetchAssets = async () => {
    setLoading(true)
    setError(null)
    try {
      if (!supabase) {
        throw new Error('Supabase client belum diinisialisasi. Periksa file .env dan restart dev server.')
      }
      const { data, error } = await supabase
        .from('assets')
        .select(`
          *,
          category:categories(name, slug),
          location:locations(name, code),
          user:users(full_name)
        `)
        .order('created_at', { ascending: false })

      if (error) setError(error)
      else setAssets(data || [])
    } catch (err) {
      console.error('[useAssets]', err)
      setError(err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchAssets()
  }, [])

  return { assets, loading, error, refetch: fetchAssets }
}
