//const Button = ({warna, size, onClick, margin, ...props}) => {
const Button = ({warna, size, styles, onClick, ...props}) => {
  const cn = (...cns) => { return cns.join(" ")}

  const variants = {
    warna: {
      primary: 'bg-sky-600 hover:bg-sky-800 text-white',
      red: 'bg-red-600 hover:bg-red-800 text-white',
      yellow: 'bg-yellow-400 hover:bg-yellow-500 text-white',
      slate: 'bg-slate-500 hover:bg-slate-800 text-white',
      green: 'bg-green-700 hover:bg-green-800 text-white',
    },
    size: {
      sm: 'px-3 py-1 text-sm',
      md: 'px-4 py-2',
      lg: 'px-6 py-2 text-lg',
    },
  }
  //cn(`rounded-md ${variants.warna[warna]} ${variants.size[size]} m-${margin}`)
  return (
    <button className={
      cn(`rounded-md ${styles}`,variants.warna[warna], variants.size[size])
    } onClick={onClick}>
      {props.children}
    </button>
  )
}
export default Button
