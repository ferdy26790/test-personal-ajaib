export const mappingListData = (list=[]) => {
    if (list && list.length > 0) {
        return list.map((data) => {
            return {
                username: data.login.username,
                name: `${data.name.first} ${data.name.last}`,
                email: data.email,
                gender: data.gender,
                registeredDate: data.registered.date,
                id: data.login.uuid

            }
        })
    }
    return []
}