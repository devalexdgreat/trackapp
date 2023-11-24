export default function TrackInfo({data, displayData}) {
    return (
        <div className="w-full bg-white p-4" style={{display : displayData}}>
            <div>
                <span className="font-bold mb-8">Tracking ID: {data.tracking_id}</span>
                <div className="flex flex-col">
                    <h1 className="mt-6 font-bold">Shipment Details</h1>
                    <ul className="list-disc ms-4">
                        <li>Name of Item: {data.name}</li>
                        <li>Item Description: {data.description}</li>
                        <li>Shipped Date: {data.shipped_date}</li>
                    </ul>

                    <div className="mt-6 flex justify-between items-center">
                        <div className="flex flex-col w-6/12">
                            <span className="font-bold mt-6">Delivered Status:</span>
                            <span>{data.delivered_status}</span> 
                        </div>
                        <div className="w-6/12">
                            <div className="h-3 bg-slate-300 flex">
                                <div className="h-full bg-green-500 w-5/12"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}