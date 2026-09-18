import type { Meta, StoryObj } from '@storybook/react-vite'
import {
  Avatar,
  AvatarFallback,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  UserList,
  UserListItem,
  UserListItemContent,
  UserListItemDescription,
  UserListItemTitle,
  UserListItemValue,
} from '../../../src'

const people = [
  { id: 'neil', name: 'Neil Sims', email: 'email@flowbite.com', initials: 'NS', value: '$320' },
  { id: 'bonnie', name: 'Bonnie Green', email: 'email@flowbite.com', initials: 'BG', value: '$3467' },
  { id: 'michael', name: 'Michael Gough', email: 'email@flowbite.com', initials: 'MG', value: '$67' },
  { id: 'thomas', name: 'Thomas Lean', email: 'email@flowbite.com', initials: 'TL', value: '$2367' },
  { id: 'lana', name: 'Lana Byrd', email: 'email@flowbite.com', initials: 'LB', value: '$367' },
]

const meta = {
  title: 'Components/UserList',
  component: UserList,
  parameters: {
    docs: {
      description: {
        component:
          'List of people with an identity, secondary line and trailing value. Compose `UserList` > `UserListItem` with an `Avatar`, `UserListItemContent` (`UserListItemTitle` + `UserListItemDescription`) and an optional `UserListItemValue`. Rows are divided with a token-backed border and use `gap` instead of directional margins.',
      },
    },
  },
} satisfies Meta<typeof UserList>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="max-w-md">
      <UserList>
        {people.map((person) => (
          <UserListItem key={person.id}>
            <Avatar className="size-8">
              <AvatarFallback>{person.initials}</AvatarFallback>
            </Avatar>
            <UserListItemContent>
              <UserListItemTitle>{person.name}</UserListItemTitle>
              <UserListItemDescription>{person.email}</UserListItemDescription>
            </UserListItemContent>
            <UserListItemValue>{person.value}</UserListItemValue>
          </UserListItem>
        ))}
      </UserList>
    </div>
  ),
}

export const WithoutValue: Story = {
  render: () => (
    <div className="max-w-md">
      <UserList>
        {people.map((person) => (
          <UserListItem key={person.id}>
            <Avatar className="size-8">
              <AvatarFallback>{person.initials}</AvatarFallback>
            </Avatar>
            <UserListItemContent>
              <UserListItemTitle>{person.name}</UserListItemTitle>
              <UserListItemDescription>{person.email}</UserListItemDescription>
            </UserListItemContent>
          </UserListItem>
        ))}
      </UserList>
    </div>
  ),
}

export const InCard: Story = {
  render: () => (
    <Card className="max-w-md">
      <CardHeader>
        <CardTitle>Team</CardTitle>
      </CardHeader>
      <CardContent>
        <UserList>
          {people.slice(0, 3).map((person) => (
            <UserListItem key={person.id}>
              <Avatar className="size-8">
                <AvatarFallback>{person.initials}</AvatarFallback>
              </Avatar>
              <UserListItemContent>
                <UserListItemTitle>{person.name}</UserListItemTitle>
                <UserListItemDescription>{person.email}</UserListItemDescription>
              </UserListItemContent>
              <UserListItemValue>{person.value}</UserListItemValue>
            </UserListItem>
          ))}
        </UserList>
      </CardContent>
    </Card>
  ),
}
