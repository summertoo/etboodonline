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
    const emailParam = params.get('email')

    const supabase = createClient()
    
    // 方法1: 如果有 token 和 email，直接验证
    if (token && type === 'signup') {
      if (emailParam) {
        supabase.auth.verifyOtp({ email: emailParam, token, type: 'signup' })
          .then(({ error }) => {
            if (error) {
              // 方法2: 尝试通过 session 验证
              supabase.auth.getSession().then(({ data, error }) => {
                if (error || !data.session) {
                  setStatus('确认失败: ' + (error?.message || '无效的链接'))
                  setSuccess(false)
                } else {
                  setStatus('邮箱确认成功！请返回登录。')
                  setSuccess(true)
                }
              })
            } else {
              setStatus('邮箱确认成功！请返回登录。')
              setSuccess(true)
            }
          })
      } else {
        // 没有 email 参数，尝试通过 session
        supabase.auth.getSession().then(({ data, error }) => {
          if (error || !data.session) {
            setStatus('确认链接无效，请确保点击的是完整邮件链接')
            setSuccess(false)
          } else {
            setStatus('邮箱确认成功！请返回登录。')
            setSuccess(true)
          }
        })
      }
    } else {
      setStatus('无效的确认链接')
      setSuccess(false)
    }
  }, [])

  const bgColor = success ? '#10b981' : '#ef4444'

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
        background: bgColor,
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
