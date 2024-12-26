import { useToast } from '@/hooks/use-toast';
import useCreateChannelModal from '@/hooks/useCreateChannel';
import { Crown, PlusSquareIcon } from 'lucide-react';
import { UserRoundPlus } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

function ResizablePanelOne({ data }) {
    const { channelModalOpen, setChannelModalOpen } = useCreateChannelModal();
    const { toast } = useToast();
    const navigate = useNavigate();
    function ModalOpen(){
        setChannelModalOpen(true);
    }
    function ChannelOpen(channelId){
        navigate(`/home/workspace/${data?.data?._id}/Channel/${channelId}`);
    }
    function InviteLink(){
        console.log(window.location.href+'/join/'+data?.data?.joincode);
        const JoinLink = window.location.href + '/join/' + data?.data?.joincode;
        navigator.clipboard.writeText(JoinLink);
        toast({
            title: "Link copied to clipboard"
        })
    }
    return (
        <div className="w-full max-w-lg mx-auto overflow-auto max-h-[calc(100vh-40px)]">
            {/* Header Section */}
            <div className="w-full h-16 flex justify-start items-center px-6 cursor-pointer  bg-indigo-400">
                <div className="flex items-center justify-center bg-indigo-500 w-12 h-12 text-white font-bold text-xl rounded-full">
                    {data?.data?.name?.charAt(0) || "?"}
                </div>
                <div className="ml-4 text-lg font-semibold text-gray-800">
                    {data?.data?.name || "Unknown"}
                </div>
            </div>

            {/* Content Section */}
            <div className="py-4 w-full px-4 box-border">
                <div className='flex items-center justify-center space-x-4 mb-3'>
                    <div className="text-center text-xl font-semibold text-indigo-600">
                        Channels
                    </div>
                    <div className='cursor-pointer flex items-center justify-center rounded-full bg-indigo-200 p-2 hover:bg-indigo-300 transition duration-200'
                    onClick={ModalOpen}>
                        <PlusSquareIcon className="w-6 h-6 text-indigo-600" />
                    </div>

                </div>

                {data?.data?.channels?.length > 0 ? (
                    <ul className="space-y-2">
                        {data.data.channels.map((channel, index) => (
                            <li
                                key={index}
                                className="px-4 py-2 cursor-pointer bg-gray-100 rounded-lg shadow-sm hover:bg-indigo-50 transition flex items-center"
                                onClick={() => {
                                    ChannelOpen(channel?._id);
                                }}
                            >
                                <span className="font-semibold text-gray-800 hover:text-indigo-600 transition text-lg">
                                    # {channel.name}
                                </span>
                            </li>
                        ))}

                    </ul>
                ) : (
                    <div className="text-center text-gray-500">
                        No channels available
                    </div>
                )}
            </div>

            <div className="py-4 w-full px-4 box-border">
                <div className='flex items-center justify-center space-x-4 mb-3'>
                    <div className="text-center text-xl font-semibold text-indigo-600">
                        Members
                    </div>
                    <div className='cursor-pointer flex items-center justify-center rounded-full bg-indigo-200 p-2 hover:bg-indigo-300 transition duration-200'
                        onClick={InviteLink}>
                        <UserRoundPlus className="w-6 h-6 text-indigo-600" />
                    </div>

                </div>
                {data?.data?.channels?.length > 0 ? (
                    <ul className="space-y-2">
                        {data.data.members.map((member, index) => (
                            <li
                                key={index}
                                className="px-4 py-2 cursor-pointer bg-gray-100 rounded-lg shadow-sm hover:bg-indigo-50 transition flex items-center"
                            >
                                <span className="font-semibold text-gray-800 hover:text-indigo-600 transition text-lg">
                                    {
                                        member?.role == 'admin' ? (
                                            <div className="flex items-center space-x-2">
                                                <span className='h-8 w-8'><img src={member?.member?.avatar} alt="" /></span>
                                                <span>{member?.member?.username}</span>
                                                <span className="text-sm text-orange-400">(admin)</span>
                                            </div>

                                        ) : (
                                            <div className="flex items-center space-x-2">
                                                <span className='h-8 w-8'><img src={member?.member?.avatar} alt="" /></span>
                                                <div>{member?.member?.username}</div>
                                            </div>
                                        )
                                    }
                                </span>
                            </li>
                        ))}

                    </ul>
                ) : (
                    <div className="text-center text-gray-500">
                        No members
                    </div>
                )}
            </div>
        </div>
    );
}

export default ResizablePanelOne;
