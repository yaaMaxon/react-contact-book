import PropTypes from "prop-types";
import placeholder from '../../assets/placeholder.jpg';

const ContactItem = ({contact, onDelete, id}) => {
  const {name, phone, bestFriend} = contact;

  return <li className={`${bestFriend ? 'bg-lime-600' : 'bg-red-500'} shadow-card duration-300 rounded hover:shadow-onHoverCard`}>
    <img src={placeholder} alt={name} className="rounded-photoCard" width='190px'/>
    <div className="flex flex-col justify-center items-center gap-2.5 px-1 py-4">
      <h2 className="text-lg font-semibold text-gray-950">{name}</h2>
      <a href={`tel:${phone}`} className="text-base text-neutral-500 hover:text-neutral-700">{phone}</a>
      <button type="button" onClick={() => onDelete(id)} className="p-2 text-sm font-semibold leading-5 text-white bg-indigo-500 rounded-lg border-none cursor-pointer hover:bg-indigo-700 hover:shadow-xl hover:-translate-y-1">Delete</button>
    </div>
  </li>
}

ContactItem.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string,
    phone: PropTypes.string,
    bestFriend: PropTypes.bool
}),
 onDelete: PropTypes.func,
 id: PropTypes.string,
}

export default ContactItem;