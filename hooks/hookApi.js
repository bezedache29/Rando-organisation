export default function hookApi() {

  const LoadSubscribers = async (table, setTableList) => {
    try {
      const result = await fetch(`${process.env.REACT_APP_URL_API}/subscribers/getSubscribers?table=${table}`);
      const data = await result.json();
      setTableList(data);
      return data;
    } catch (err) {
      return err;
    }
  }

  const AddSubscribers = async (data) => {
    try {
      const res = await fetch(`${process.env.REACT_APP_URL_API}/subscribers/addSubscribers`, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          "content-type": "application/json"
        }
      })
      const response = await res.json()
      return response;
    } catch (err) {
      console.log(err);
    }
  }

  const DeleteSubscriberFromTable = async (data) => {
    try {
      const res = await fetch(`${process.env.REACT_APP_URL_API}/subscribers/deleteSubscribers`, {
        method: 'DELETE',
        body: JSON.stringify(data),
        headers: {
          "content-type": "application/json"
        }
      })
      const response = await res.json()
      console.log(response)
      return 'deleted';
    } catch (err) {
      console.log(err)
    }
  }

  return {
    LoadSubscribers,
    AddSubscribers,
    DeleteSubscriberFromTable
  }
}
