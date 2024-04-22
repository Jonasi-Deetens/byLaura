import ghostBlue from "../assets/ghost-blue.jpeg"
import fox from "../assets/fox.jpeg"

const ImageWindowAnimated = () => {
  return (
    <section className="m-auto flex w-72 overflow-hidden">
        <div className="flex flex-col justify-center w-1/3 p-2">
            <img className="rounded-md my-2 border-2 border-primary shadow-sm" src={fox} alt="" />
            <img className="rounded-md my-2 border-2 border-primary shadow-sm" src={ghostBlue} alt="" />
        </div>
        <div className="flex flex-col justify-center w-1/3 p-2">
            <img className="rounded-md my-2 border-2 border-primary shadow-sm" src={fox} alt="" />
            <img className="rounded-md my-2 border-2 border-primary shadow-sm" src={ghostBlue} alt="" />
            <img className="rounded-md my-2 border-2 border-primary shadow-sm" src={fox} alt="" />
            <img className="rounded-md my-2 border-2 border-primary shadow-sm" src={ghostBlue} alt="" />
        </div>
        <div className="flex flex-col justify-center w-1/3 p-2">
            <img className="rounded-md my-2 border-2 border-primary shadow-sm" src={fox} alt="" />
            <img className="rounded-md my-2 border-2 border-primary shadow-sm" src={ghostBlue} alt="" />
        </div>
    </section>
  )
}

export default ImageWindowAnimated