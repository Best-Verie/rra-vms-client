import "./../dashboard/sidebar.css"

export default function HomeDashboard(){
    return(
        <div className="container">
            <div className="topNav">
                <div className="row">
                    <div className="col-md-10 col-lg-10">
                        <input type="text" class="form-control mt-3" placeholder="Search..." name="search"    />
                    </div>
                    <div className="col-md-2 col-lg-2">
                        <p>Admin</p>
                        <p>Best Verie</p>
                    </div>
            </div>
            <div className="cards-content">
                <div className="row">
                <div className="col-md-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore quam nam enim autem recusandae ad tempora perferendis, corrupti id placeat dolorem reprehenderit, quisquam adipisci illo dignissimos. Velit ab dolore accusamus?
                </div>
                <div className="col-md-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore quam nam enim autem recusandae ad tempora perferendis, corrupti id placeat dolorem reprehenderit, quisquam adipisci illo dignissimos. Velit ab dolore accusamus?
                </div>
                <div className="col-md-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore quam nam enim autem recusandae ad tempora perferendis, corrupti id placeat dolorem reprehenderit, quisquam adipisci illo dignissimos. Velit ab dolore accusamus?
                </div>
            </div>
            </div>
            
        </div>
        </div>
    )
}