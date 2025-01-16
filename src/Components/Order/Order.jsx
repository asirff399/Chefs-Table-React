const Order = () => {
    return (
        <div className="h-screen border-2 border-slate-200 rounded-xl">
            <div>
                <div className="w-4/6 mx-auto my-2">
                    <h1 className="text-center text-2xl font-semibold m-4 mt-7">Want to cook: 1</h1>
                    <hr />
                </div>
                <table className="table-auto w-full border-collapse ">
                    <thead>
                        <tr>
                            <th className="px-4 py-2 text-left"></th>
                            <th className="px-4 py-2 text-left">Name</th>
                            <th className="px-4 py-2 text-left">Time</th>
                            <th className="px-4 py-2 text-left">Calories</th>
                        </tr>
                    </thead>
                    <tbody className="bg-gray-100">
                        <tr className="even:bg-gray-50">
                            <td className="px-4 py-2">1</td>
                            <td className="px-4 py-2">The Sliding Mr. Bones</td>
                            <td className="px-4 py-2">10 min</td>
                            <td className="px-4 py-2">200 cal</td>
                        </tr>
                    </tbody>
                </table>

            </div>
            <div>
                <div className="w-4/6 mx-auto my-2">
                    <h1 className="text-center text-2xl font-semibold m-4 mt-7">Currently cooking: 1</h1>
                    <hr />
                </div>
                <table className="table-auto w-full border-collapse ">
                    <thead>
                        <tr>
                            <th className="px-4 py-2 text-left"></th>
                            <th className="px-4 py-2 text-left">Name</th>
                            <th className="px-4 py-2 text-left">Time</th>
                            <th className="px-4 py-2 text-left">Calories</th>
                        </tr>
                    </thead>
                    <tbody className="bg-gray-100">
                        <tr className="even:bg-gray-50">
                            <td className="px-4 py-2">1</td>
                            <td className="px-4 py-2">The Sliding Mr. Bones</td>
                            <td className="px-4 py-2">10 min</td>
                            <td className="px-4 py-2">200 cal</td>
                        </tr>
                    </tbody>
                        <tr className="mt-11">
                            <td className="px-4 py-2"></td>
                            <td className="px-4 py-2"></td>
                            <td className="px-4 py-2">Total time = <br />10 min</td>
                            <td className="px-4 py-2">Total calories = <br />200 cal</td>
                        </tr>
                </table>
            </div>
        </div>
    );
};

export default Order;