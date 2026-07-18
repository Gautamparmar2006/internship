import { useEffect, useState } from "react";
import API from "../services/api";
import "./AdminDashboard.css";


function AdminDashboard(){

    const [crops,setCrops]=useState([]);

    const [search,setSearch]=useState("");

    const [cropName,setCropName]=useState("");

    const [price,setPrice]=useState("");

    const [editId,setEditId]=useState(null);



    // GET ALL CROPS

    const fetchCrops=async()=>{

        try{

            const res=await API.get("/crop/all");

            setCrops(res.data);

        }
        catch(error){

            console.log(error);

        }

    };



    useEffect(()=>{

        fetchCrops();

    },[]);



    // ADD / UPDATE

    const saveCrop=async()=>{


        try{


            if(editId){


                await API.put(
                    `/crop/update/${editId}`,
                    {
                        crop_name:cropName,
                        price:price
                    }
                );


            }
            else{


                await API.post(
                    "/crop/add",
                    {
                        crop_name:cropName,
                        price:price
                    }
                );


            }


            setCropName("");

            setPrice("");

            setEditId(null);


            fetchCrops();


        }
        catch(error){

            console.log(error);

        }


    };



    // DELETE

    const deleteCrop=async(id)=>{


        await API.delete(
            `/crop/delete/${id}`
        );


        fetchCrops();

    };



    // EDIT

    const editCrop=(crop)=>{


        setCropName(crop.crop_name);

        setPrice(crop.price);

        setEditId(crop.id);


    };




    return(


<div className="admin">


<h1>
🌾 Crop Management Dashboard
</h1>



<div className="form-box">


<input

placeholder="Crop Name"

value={cropName}

onChange={
(e)=>setCropName(e.target.value)
}

/>



<input

placeholder="Price"

type="number"

value={price}

onChange={
(e)=>setPrice(e.target.value)
}

/>



<button onClick={saveCrop}>

{
editId ? "Update Crop":"Add Crop"
}

</button>


</div>




<input

className="search"

placeholder="Search Crop..."

value={search}

onChange={
(e)=>setSearch(e.target.value)
}

/>





<table>


<thead>

<tr>

<th>ID</th>

<th>Crop</th>

<th>Price</th>

<th>Action</th>

</tr>

</thead>



<tbody>


{

crops

.filter((crop)=>

crop.crop_name
.toLowerCase()
.includes(search.toLowerCase())

)

.map((crop)=>(


<tr key={crop.id}>


<td>
{crop.id}
</td>


<td>
{crop.crop_name}
</td>


<td>
₹ {crop.price}
</td>



<td>


<button
className="edit"
onClick={()=>editCrop(crop)}
>

Edit

</button>



<button

className="delete"

onClick={()=>deleteCrop(crop.id)}

>

Delete

</button>


</td>


</tr>


))


}



</tbody>


</table>



</div>


    )


}


export default AdminDashboard;