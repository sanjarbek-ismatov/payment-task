import {UserInterface} from "@/app/types";
import Image from "next/image";

function List({user, url}: { user?: UserInterface; url?: string }) {
    return (
        <li className="py-3 sm:py-4">
            <div className="flex items-center space-x-3">
                <div className="flex-shrink-0">
                    <Image
                        width={32}
                        height={32}
                        className="w-8 h-8 rounded-full"
                        src={`${url}/api/files/get/${user?.image}`}
                        alt="Neil image"
                        unoptimized
                    />
                </div>
                <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-gray-900 truncate dark:text-white">
                        {user?.fullName}
                    </p>
                    <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                        {user?.email}
                    </p>
                </div>
            </div>
        </li>
    );
}

export default List;
