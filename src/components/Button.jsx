const Button = ({ children, action, clr }) => {
  return (
    <button
      className={`inline-flex items-center place-content-center gap-4 bg-${clr}-800 px-5 py-3 rounded-md uppercase font-bold text-${clr}-50 text-sm hover:bg-${clr}-600 transition-all mt-10`}>
      {action}
      {children}
    </button>
  )
}

export default Button
