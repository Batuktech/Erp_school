  import Image from "next/image";
  
  
  export default function Navbar() {
  return (
    <div className="px-8">
        <div className="flex w-full justify-between">
          <div className="">
            <h1>Welcome Back, UserName!!</h1>
            {/* check role and h3 depends on user role */}
            <h3 className="text-gray-500 font-light">Admin Dashboard</h3>

          </div>
          <div className="flex items-center gap-2">
                <Image
                src="/image/notif.png"
                alt="Dashboard Illustration"
                width={40}
                height={40}
                className="p-2"
                />

            {/* add notif count */}
            <div className="flex flex-col">
                <h1 className="font-medium">UserName</h1>
                <h2 className="font-medium text-gray-500">Role</h2>
            </div>
          </div>
        </div>
    </div>
  );
}