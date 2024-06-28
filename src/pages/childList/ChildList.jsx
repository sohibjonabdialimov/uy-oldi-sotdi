import "./list.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import ChildTable from "../../components/childTable/ChildTable"

const ChildList = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer bg-slate-100">
        <ChildTable/>
      </div>
    </div>
  )
}

export default ChildList