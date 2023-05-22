import './index.css'

const ConfigurationController = () => (
  <div className="con-container">
    <h1>Layout</h1>
    <ul>
      <li>
        <input id="content" type="checkbox" />
        <label htmlFor="content">Content</label>
      </li>
      <li>
        <input id="leftnav" type="checkbox" />
        <label htmlFor="leftnav">Left Navbar</label>
      </li>
      <li>
        <input type="checkbox" id="rightnav" />
        <label htmlFor="rightnav">Right Navbar</label>
      </li>
    </ul>
  </div>
)

export default ConfigurationController
