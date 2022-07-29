import type { I_User } from '@/types/user'

const avatarGenerator = 'https://avatars.dicebear.com/api/human/'
const extension = '.svg'

export const getUserAvatar = (user: I_User) =>
  avatarGenerator + user.name + user.age + user.locationId + extension
