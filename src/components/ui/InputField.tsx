import { Input } from '@heroui/input'

type BasicInputProps = {
  label?: string
  name: string
  type?: string
  placeholder?: string
  isRequired?: boolean
  isDisabled?: boolean
  errorMessage?: string
  className?: string
  inputClassName?: string
  variant?: 'flat' | 'bordered' | 'underlined' | 'faded'
  radius?: 'sm' | 'md' | 'lg' | 'full'
  showLabel?: boolean
}

export const InputField = ({
  label,
  name,
  type = 'text',
  placeholder,
  isRequired = false,
  isDisabled = false,
  errorMessage,
  className = '',
  inputClassName = '',
  variant = 'bordered',
  radius = 'md',
  showLabel = true,
}: BasicInputProps) => {
  return (
    <div className={`flex flex-col ${showLabel ? 'gap-2' : 'gap-0'} ${className}`}>
      {showLabel && label && (
        <label className="text-sm font-medium">
          {label}
          {isRequired && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      <Input
        name={name}
        type={type}
        placeholder={placeholder}
        isDisabled={isDisabled}
        isRequired={isRequired}
        variant={variant}
        radius={radius}
        classNames={{
          base: "text-white",
          input: "bg-[#171F2F] text-white !text-white",
          innerWrapper: "bg-[#171F2F]",
          inputWrapper: "bg-[#171F2F] border-0 hover:border-0 focus:border-0 active:border-0 data-[hover=true]:bg-[#171F2F] data-[focus=true]:bg-[#171F2F] data-[focus-visible=true]:bg-[#171F2F] data-[focus-visible=true]:outline-none data-[focus-visible=true]:ring-0"
        }}
        className={`${errorMessage ? 'border-red-500' : ''} ${inputClassName}`}
      />
      {errorMessage && <span className="text-sm text-red-500">{errorMessage}</span>}
    </div>
  )
}
