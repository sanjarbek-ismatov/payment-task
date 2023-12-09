import {TransferInterface} from "@/app/types";
import ImageComponent from "@/app/components/Image";

function TransferDetails({
                             transfer,
                             fromUser,
                         }: {
    transfer: TransferInterface;
    fromUser: boolean;
}) {
    const date = new Date(transfer.date);
    const image = fromUser
        ? transfer.receiverId?.image
        : transfer.senderId?.image;
    return (
        <li className="mb-10 ml-6">
      <span
          className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
        <ImageComponent
            className="rounded-full shadow-lg h-6 w-6 object-cover"
            url={image}
            alt={transfer.receiverId?.fullName}
        />
      </span>
            <div
                className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-700 dark:border-gray-600">
                <div className="items-center justify-between mb-3 sm:flex">
                    <time className="mb-1 text-xs font-normal text-gray-400 sm:order-last sm:mb-0">
                        {date.toLocaleDateString()} {date.toLocaleTimeString()}
                    </time>
                    <div className="text-sm font-normal text-gray-500 lex dark:text-gray-300">
                        {fromUser
                            ? `${transfer.receiverId?.fullName}ga`
                            : `${transfer.senderId?.fullName} sizga`}{" "}
                        <span
                            className={`font-semibold text-gray-900  ${
                                fromUser ? "text-red-600" : "text-green-600"
                            }`}
                        >
              {transfer.amount} so'm
            </span>{" "}
                        pul o'tkaz{fromUser ? "il" : ""}di
                    </div>
                </div>
                <div
                    className="p-3 text-xs italic font-normal text-gray-500 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-600 dark:border-gray-500 dark:text-gray-300">
                    {transfer.description}
                </div>
            </div>
        </li>
    );
}

export default TransferDetails