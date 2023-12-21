import Button from "../components/button"

const subscribe = () => {
  return (
    <section className="max-container flex justify-between items-center max-lg:flex-col gap-10 "id="contact-us">
      <h3 className="text-4xl leading-[68px] lg:max-w-md font-palanquin font-bold">Sign up for 
      <span className="text-coral-red"> Updates </span>&newletter</h3>
      <div className="lg:max-w-[40%] w-full flex item-center max-sm:flex-col gap-5 p-2.5 border rounded-full border-slate-grey">
        <input type='text' placeholder="by HarrishHrun" className="input"/>
      <div className="flex max-sm:justify-end items-center max-sm:w-full"><Button label="signup" fullWidth/></div></div>
    <div>
      </div></section>
  )
}

export default subscribe