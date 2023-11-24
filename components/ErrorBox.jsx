export default function ErrorBox({errData, displayData}) {
    return (
        <div className="bg-red-500 py-2 w-full rounded-lg flex items-center justify-center" style={{display : displayData}}>
            <div className="flex items-center justify-center">
                <span className="text-white">{errData}</span>
            </div>
        </div>
    );
}