export default [
//  {
//    _tag: 'CSidebarNavTitle',
//    _children: ['Menu']
//  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Angela Smith',
    to: '/dashboard',
    icon: {src: 'avatars/6.jpg', className:'c-avatar pr-1 p-1 mr-1', alt:"admin@bootstrapmaster.com"},
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Dashboards',
    route: '/base',
    icon: 'cil-grid',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Summary',
        to: '/base/breadcrumbs',
        icon: 'cil-notes',
        color: 'secondary'

      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Assets',
        to: '/base/cards',
        icon: 'cil-layers'
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'People',
        to: '/base/carousels',
        icon: 'cil-people'
      }
    ],
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Analytics',
    route: '/buttons',
    icon: 'cil-speedometer',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Entitlement Reports',
        to: '/buttons/buttons',
        icon: 'cil-print'
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Violations',
        to: '/buttons/brand-buttons',
        icon: 'cil-warning'
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Recommendations',
        to: '/buttons/button-groups',
        icon: 'cil-inbox'
      }
    ],
  },
 {
    _tag: 'CSidebarNavDropdown',
    name: 'Others',
    route: '/buttons',
    icon: 'cil-align-center',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Subitem1',
        to: '/buttons/buttons',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Subitem2',
        to: '/buttons/brand-buttons',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Subitem3',
        to: '/buttons/button-groups',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Subitem4',
        to: '/buttons/button-dropdowns',
      }
    ],
  }

]

