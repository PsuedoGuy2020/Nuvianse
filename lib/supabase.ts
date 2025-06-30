import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Email submission function
export async function submitEmail(email: string) {
  try {
    const { data, error } = await supabase
      .from('users')
      .insert([
        {
          email: email,
          created_at: new Date().toISOString(),
        }
      ])
      .select()

    if (error) {
      console.error('Error inserting email:', error)
      return { success: false, error: error.message }
    }

    return { success: true, data }
  } catch (error) {
    console.error('Unexpected error:', error)
    return { success: false, error: 'An unexpected error occurred' }
  }
}