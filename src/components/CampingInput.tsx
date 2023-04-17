import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";

interface FormData {
  img: object | null;
  title: string;
  description: string;
  price: string;
}

export const CampingInput = () => {
  const [data, setData] = useState<FormData>({
    img: {},
    title: "",
    description: "",
    price: "",
  });

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    console.log("here");
    console.log(data);

    const formData: any = new FormData();
    formData.append("img", data.img);
    formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append("price", data.price);

    console.log(formData);
    try {
      await axios.post(`api/camping/add-camping`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      toast("Successfully added", { icon: "🏕️" });
      setData({ img: null, title: "", description: "", price: "" });
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="w-80 h-96 pl-4 pt-4">
      <form
        action=""
        className="bg-red-100 w-full h-56 flex flex-col gap-3 rounded p-2"
        onSubmit={handleSubmit}
      >
        <input
          type="file"
          name="img"
          multiple
          onChange={(e) =>
            setData((data) => ({ ...data, img: e.target!.files![0] }))
          }
          value={""}
          className="file:mr-4 file:py-2 file:px-4
          file:rounded-full file:border-0
          file:text-sm file:font-semibold
          file:bg-violet-50 file:text-violet-700
          hover:file:bg-violet-100"
        />
        <input
          type="text"
          placeholder="Title of your place"
          className="w-30"
          onChange={(e) =>
            setData((data) => ({ ...data, title: e.target.value }))
          }
          value={data.title}
        />
        <input
          type="text"
          placeholder="Description"
          className="w-38"
          onChange={(e) =>
            setData((data) => ({ ...data, description: e.target.value }))
          }
          value={data.description}
        />
        <input
          type="number"
          placeholder="Price"
          className=""
          onChange={(e) =>
            setData((data) => ({ ...data, price: e.target.value }))
          }
          value={data.price}
        />
        <button className="bg-blue-200 rounded">Add Camping</button>
      </form>
    </div>
  );
};
