import Image from "next/image";
import Announcement from "./announcement";

export default function AnnouncementPage() {
  return (
              <div className="p-4">
                <div className="flex justify-between">
                  <div>
                    <h1 className="text-2xl font-bold">Announcement Management</h1>
                    <p className="text-gray-600">
                      Stay updated with school news and events
                    </p>
                  </div>
                    <div className="flex gap-4">
                        <button className="bg-lime-600 text-white rounded-lg p-4 hover:bg-lime-700">+ New Announcement</button>
                    </div>
                </div>
                <div className="flex gap-4 mt-10 items-center">
                  <Image
                    src="/image/speaker.png"
                    alt="Announcement"
                    width={30}
                    height={20}
                    className=""
                  />
                  <h3>Pinned Announcements</h3>
                </div>
                {/* Announcement List Component */}
                <div className="mt-6">
                  <Announcement/>
                </div>
              </div>
  );
}