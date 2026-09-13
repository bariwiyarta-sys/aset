import { useEffect, useState } from 'react'
import { supabase } from '../lib/supabase'

export function useSupabaseQuery(table, columns = '*') {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    let cancelled = false
    const fetchData = async () => {
      if (!supabase) {
        setError(new Error('Supabase client belum diinisialisasi. Periksa file .env dan restart dev server.'))
        setLoading(false)
        return
      }
      setLoading(true)
      setError(null)
      try {
        const { data, error } = await supabase.from(table).select(columns)
        if (!cancelled) {
          if (error) setError(error)
          else setData(data || [])
        }
      } catch (err) {
        if (!cancelled) {
          console.error(`[useSupabaseQuery][${table}]`, err)
          setError(err)
        }
      } finally {
        if (!cancelled) setLoading(false)
      }
    }
    fetchData()
    return () => {
      cancelled = true
    }
  }, [table, columns])

  return { data, loading, error, refetch: () => {} }
}

export function useCreateAsset() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(false)

  const createAsset = async (payload) => {
    setLoading(true)
    setError(null)
    setSuccess(false)

    try {
      if (!supabase) {
        const err = new Error('Supabase client belum diinisialisasi. Periksa file .env dan restart dev server.')
        setError(err)
        setLoading(false)
        return { data: null, error: err }
      }

      const { data, error } = await supabase
        .from('assets')
        .insert([payload])
        .select(`
          *,
          category:categories(name, slug),
          location:locations(name, code),
          user:users(full_name)
        `)
        .single()

      if (error) {
        setError(error)
        setLoading(false)
        return { data: null, error }
      }

      setSuccess(true)
      setLoading(false)
      return { data, error: null }
    } catch (err) {
      console.error('[useCreateAsset]', err)
      setError(err)
      setLoading(false)
      return { data: null, error: err }
    }
  }

  const reset = () => {
    setSuccess(false)
    setError(null)
  }

  return { createAsset, loading, error, success, reset }
}
