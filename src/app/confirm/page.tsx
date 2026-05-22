'use client'

import { useEffect, useState } from 'react'
import { createClient } from '@/lib/supabase'

export default function ConfirmPage() {
  const [status, setStatus] = useState('确认中...')
  const [success, setSuccess] = useState(false)

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const token = params.get('token')
    const type = params.get('type')

    if (token && type === 'signup') {
      const supabase = createClient()
      supabase.auth.verifyOtp({ token, type: 'signup' })
        .then(({ error }) => {
          if (error) {
            setStatus('确认失败: ' + error.message)
            setSuccess(false)
          } else {
            setStatus('邮箱确认成功！请返回登录。')
            setSuccess(true)
          }
        })
        .catch((e: any) => {
          setStatus('确认失败: ' + e.message)
          setSuccess(false)
        })
    } else {
      setStatus('无效的确认链接')
      setSuccess(false)
    }
  }, [])

  return (
    <div style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      background: '#1a1a2e',
      color: '#fff'
    }}>
      <div style={{ 
        padding: '40px', 
        borderRadius: '16px', 
        background: success ? '#10b981' : '#ef4444',
        textAlign: 'center'
      }}>
        <h1 style={{ fontSize: '24px', marginBottom: '16px' }}>
          {status}
        </h1>
        {success && (
          <a href="/" style={{ color: '#fff', textDecoration: 'underline' }}>
            返回首页
          </a>
        )}
      </div>
    </div>
  )
}
