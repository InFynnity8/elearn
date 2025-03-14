import React from 'react'
import {SignUpForm} from '../../../components/signup-form.tsx'

const SignUp = () => {
  return (
    <div className="relative flex min-h-svh flex-col items-center justify-center gap-6 bg-background p-6 md:p-10">
      <div className="w-full max-w-sm">
        <SignUpForm />
      </div>
    </div>
  )
}

export default SignUp