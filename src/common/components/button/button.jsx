
export default function Button({text, icon, endIcon, onClick, isbg, type, disabled, className, name}) {
  return (
    <button 
    type={type}
    name={name}
    onClick={onClick}
    style={{ backgroundColor: isbg }}
    disabled={disabled}
    className={`w-full justify-center md:text-base text-sm font-medium flex items-center gap-2 rounded py-[10px] px-[17px] ${className && className}`}>
        {icon && icon}
        {text}
        {endIcon && endIcon}
    </button>
  )
}
