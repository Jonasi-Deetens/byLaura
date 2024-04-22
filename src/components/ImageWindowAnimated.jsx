import ghostBlue from "../assets/ghost-blue.jpeg";
import fox from "../assets/fox.jpeg";

const ImageWindowAnimated = () => {
  return (
    <section className="m-auto my-10 flex h-72 w-72 items-center overflow-hidden">
      <div className="scrolling-container w-1/3 h-36">
        <div className="scrolling-content flex flex-col justify-center p-2">
          <img
            className="rounded-md my-2 top-0 border-2 border-primary shadow-sm"
            src={fox}
            alt=""
          />
          <img
            className="rounded-md my-2 top-16 border-2 border-primary shadow-sm"
            src={ghostBlue}
            alt=""
          />
          <img
            className="rounded-md my-2 top-32 border-2 border-primary shadow-sm"
            src={fox}
            alt=""
          />
          <img
            className="rounded-md my-2 top-48 border-2 border-primary shadow-sm"
            src={ghostBlue}
            alt=""
          />
        </div>
      </div>
      <div className="scrolling-container w-1/3 h-72">
        <div className="scrolling-content flex flex-col justify-center p-2">
          <img
            className="rounded-md my-2 border-2 border-primary shadow-sm"
            src={fox}
            alt=""
          />
          <img
            className="rounded-md my-2 border-2 border-primary shadow-sm"
            src={ghostBlue}
            alt=""
          />
          <img
            className="rounded-md my-2 border-2 border-primary shadow-sm"
            src={fox}
            alt=""
          />
          <img
            className="rounded-md my-2 border-2 border-primary shadow-sm"
            src={ghostBlue}
            alt=""
          />
          <img
            className="rounded-md my-2 border-2 border-primary shadow-sm"
            src={fox}
            alt=""
          />
          <img
            className="rounded-md my-2 border-2 border-primary shadow-sm"
            src={ghostBlue}
            alt=""
          />
          <img
            className="rounded-md my-2 border-2 border-primary shadow-sm"
            src={fox}
            alt=""
          />
          <img
            className="rounded-md my-2 border-2 border-primary shadow-sm"
            src={ghostBlue}
            alt=""
          />
        </div>
      </div>
      <div className="scrolling-container w-1/3 h-36">
        <div className="scrolling-content flex flex-col justify-center p-2">
          <img
            className="rounded-md my-2 border-2 border-primary shadow-sm"
            src={fox}
            alt=""
          />
          <img
            className="rounded-md my-2 border-2 border-primary shadow-sm"
            src={ghostBlue}
            alt=""
          />
          <img
            className="rounded-md my-2 border-2 border-primary shadow-sm"
            src={fox}
            alt=""
          />
          <img
            className="rounded-md my-2 border-2 border-primary shadow-sm"
            src={ghostBlue}
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default ImageWindowAnimated;
