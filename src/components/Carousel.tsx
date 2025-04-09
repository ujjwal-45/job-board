import threem from "../assets/threem.svg"
import budweiser from "../assets/budwieser.svg"
import mens from "../assets/mensHealth.svg"
import flowAnalytics from "../assets/flow_analytics.png"
import apple from "../assets/apple.png"
import microsoft from "../assets/microsoft.png"

const Carousel = () => {
    return (
      <div className=" flex whitespace-nowrap">
        <div className="flex gap-25 overflow-hidden p-10 animation-slide">
          <img src={threem} alt="threem" className="h-[100px] w-[100px]" />
          <img
            src={budweiser}
            alt="budweiser"
            className="h-[100px] w-[100px]"
          />
          <img src={mens} alt="mens" className="h-[100px] w-[100px]" />
          <img src={apple} alt="mens" className="h-[80px] w-[100px]" />
          <img src={microsoft} alt="mens" className="h-[80px] w-[100px]" />
          <img
            src={flowAnalytics}
            alt="flowAnalytics"
            className="h-[100px] w-[160px]"
          />
        </div>
        <div className="flex gap-25 overflow-hidden p-10 animation-slide">
          <img src={threem} alt="threem" className="h-[100px] w-[100px]" />
          <img
            src={budweiser}
            alt="budweiser"
            className="h-[100px] w-[100px]"
          />
          <img src={mens} alt="mens" className="h-[100px] w-[100px]" />
          <img
            src={flowAnalytics}
            alt="flowAnalytics"
            className="h-[100px] w-[160px]"
          />
          <img src={mens} alt="mens" className="h-[100px] w-[100px]" />
          <img src={apple} alt="mens" className="h-[80px] w-[100px]" />
        </div>
      </div>
    );
}

export default Carousel;