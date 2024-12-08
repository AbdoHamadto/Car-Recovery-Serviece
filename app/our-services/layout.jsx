import ServiceSidebar from '@layouts/partials/ServiceSidebar'

export default function childrenLayout({ children }) {
  return (
    <div className='container flex my-10 phone:flex-col phone:my-2'>
      {children}
      <ServiceSidebar />
    </div>
  )
}
