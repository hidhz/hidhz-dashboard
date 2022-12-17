function Container({padding, ...props}) {
  const cn = (...cns) => {return cns.join(" ")}
  return (<>
    <div className={cn(`container ${padding}`)}>
      {props.children}
    </div>
  </>)
}
export default Container
