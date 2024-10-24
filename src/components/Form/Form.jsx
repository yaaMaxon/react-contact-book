import { useForm } from "react-hook-form";
// import { ErrorMessage } from "@hookform/error-message"
import { createContact } from "../../services/api";

const Form = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    defaultValues: {
      name: '',
      phone: '',
      bestFriend: false,
    },
  });


  const onSubmit = (data) => {
    data.bestFriend = data.bestFriend === 'true' ? true : false
    
    
    createContact(data)
    reset()
  };

  const onError = (errors) => {
    console.log("Form Errors:", errors);
  };


  return (
    <form
      className="flex flex-col items-center gap-1 mb-7 mt-5"
      onSubmit={handleSubmit(onSubmit, onError)}
    >
      <div className="flex flex-col items-center gap-1">
        <label htmlFor="name" className="text-neutral-600">Name</label>
        <input
          type="text"
          id="name"
          {...register('name', { required: true,             
            // validate: (value) => {
            //   if (!value.includes('@')) {
            //     return 'no @'
            //   }
            // }
             minLength: {
            value: 3,
            message: "Name must be at least 3 symbols",
          }
            })}
          className="w-36 p-1 border-none rounded bg-zinc-200"
        />
         {errors.name && <span className="text-xs text-red-600 ">{errors.name.message}</span>}
      </div>
      <div className="flex flex-col items-center gap-1">
        <label htmlFor="phone" className="text-neutral-600">Phone number</label>
        <input
          type="text"
          id="phone"
          {...register('phone', { required: true,
            minLength: {
            value: 3,
            message: "This phone number must be more than 3 symbols",
          },
            maxLength: {
            value: 14,
            message: "This phone number must be less than 14 symbols",
          }})}
          className="w-36 p-1.5 border-none rounded bg-zinc-200"
        />
        {/* <ErrorMessage errors={errors} name="phone" /> */}
        {errors.phone && <span className="text-xs text-red-600 ">{errors.phone.message}</span>}
      </div>
      <div className="flex flex-col items-center gap-1">
        <p className="text-neutral-600 text-lg">Best friend?</p>
        <div className="flex gap-2">
          <div className="flex items-center gap-2">
            <input
              type="radio"
              id="bestFriendYes"
              value={true}
              {...register('bestFriend', { required: true })}
              className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
            />
            <label htmlFor="bestFriendYes" className="text-zinc-800 font-semibold">Yes</label>
          </div>
          <div className="flex items-center gap-2">
            <input
              type="radio"
              id="bestFriendNo"
              value={false}
              {...register('bestFriend', { required: true })}
              className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
            />
            <label htmlFor="bestFriendNo" className="text-zinc-800 font-semibold">No</label>
          </div>
        </div>
      </div>
      <button
        type="submit"
        className="p-2.5 text-sm font-semibold leading-5 text-white bg-indigo-500 rounded-lg border-none cursor-pointer hover:bg-indigo-700 hover:shadow-xl hover:-translate-y-1"
      >
        Create contact
      </button>
    </form>
  );
};

export default Form;
