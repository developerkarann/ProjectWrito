import { Bounce, JackInTheBox, Reveal } from "react-awesome-reveal";
const Win = () => {
  return (
    <div className="w-full my-20 mx-auto px-6 ">
      <h1 className="text-5xl text-center my-9 font-bold">Lets win together</h1>
      <div className="flex flex-col lg:flex-row items-center">
        <div className="w-full lg:w-1/2">
          <Reveal triggerOnce>
            <JackInTheBox>
              <img
                src="https://img.freepik.com/free-vector/happy-people-celebrating-goal-achievement_23-2148823077.jpg?size=626&ext=jpg&ga=GA1.1.1095058862.1690478409&semt=ais"
                alt=""
              />
            </JackInTheBox>
          </Reveal>
        </div>
        <div className="w-full md:my-0 my-6  lg:w-1/2">
          <form className="max-w-md mx-auto">
            <div className="mb-4">
              <label className="block text-xl font-bold   mb-2">Name</label>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="input input-bordered  p-3 rounded-md text-black w-full"
              />
            </div>
            <div className="mb-4">
              <label className="block text-xl font-bold  mb-2">Email</label>
              <input
                type="email"
                name="email"
                placeholder="example@gmail.com"
                required
                className="input input-bordered  p-3 rounded-md text-black w-full"
              />
            </div>

            <div className="mb-4">
              <label className="block text-xl font-bold   mb-2">Message</label>
              <textarea
                name="message"
                required
                className="textarea textarea-bordered  p-3 rounded-md text-black w-full h-24"
                placeholder="Some text..."></textarea>
            </div>
            <div className="w-full flex text-center justify-center mt-6">
              <button className="allBtn px-11 text-xl font-bold">Send</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Win;
