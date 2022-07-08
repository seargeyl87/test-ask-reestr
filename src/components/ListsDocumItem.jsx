import '../App.css';


function ListsDocumItem({itemDoc}) {

    return (
        <>
            <tr>
                <td>{itemDoc.category}</td>
                <td>{itemDoc.name}</td>
                <td>{itemDoc.date}</td>
                <td>{itemDoc.number}</td>
                <td>{itemDoc.content}</td>
            </tr>
      </>
    )

}

export default ListsDocumItem;