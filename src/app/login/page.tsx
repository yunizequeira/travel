import LoginForm from "@/components/LoginForm";

const pageLogin = () => {
  return (
    <div className=" bg-[url('/img/dest/dest1.jpg')] bg-cover bg-center min-h-screen h-screen">
      <div className="h-full w-full bg-black/80 px-2">
        <div className="h-full w-full flex justify-center items-center gap-8  lg:px-5 container mx-auto">
          <div className="bg-white rounded-lg shadow-xl p-8 mt-32 max-w-[400px] mx-auto">
            <div className="text-center font-bold text-2xl py-3">
              <h1>Login</h1>
            </div>
            <LoginForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default pageLogin;
