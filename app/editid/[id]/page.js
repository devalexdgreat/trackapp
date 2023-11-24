import AdminNav from "@/components/AdminNav";
import EditTopicForm from "@/components/EditIdForm";

const getItemById = async (id) => {
    try {
        const res = await fetch(`http://localhost:3000/api/items/${id}`, {
            cache: "no-store",
        });

        if (!res.ok) {
            throw new Error("Failed to fetch item");
        }

        return res.json();
    } catch (error) {
        console.log(error);
    }
}

export default async function EditId({ params }) {
    const { id } = params;
    const { item } = await getItemById(id);
    const { tracking_id, shipped_date, name, description, 
        from_address, to_address, delivered_status } = item;

    return (
        <div className="w-full">
            <AdminNav />
            <div className="w-11/12 mx-auto">
                <div className="my-6">
                    <h1 className="text-xl font-medium">Edit / Update Item Details</h1>
                </div>
                <EditTopicForm id={id} tracking_id={tracking_id} shipped_date={shipped_date} 
                name={name} description={description} from_address={from_address} to_address={to_address} 
                delivered_status={delivered_status} />
            </div>
        </div>
    );
}