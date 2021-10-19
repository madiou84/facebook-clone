import { UserCircleIcon, SearchIcon, VideoCameraIcon } from '@heroicons/react/solid';
import { SearchIcon as SearchIconOutline, DotsHorizontalIcon } from '@heroicons/react/outline';

import {
  Nav,
  Posts,
  Salons,
  FbIcon,
  Layout,
  NavItem,
  Stories,
  PostItem,
  StoryForm,
  StoryItem,
  SalongItem,
  FixedSidbar,
  ImageProfileUser,
  ButtonCreateSalon,
  FormWhatWouldYouSay,
  FloatingButtonMakeMessage,
} from '../../Shared';
import {
  posts,
  users,
  sidbarData,
  storiesData,
  navDimensionStyle,
  usersInConversation } from '../../utils';
import { capitalizeFirstLetter, classNames } from '../../Shared/helper';

export default function App () {
  return (
    <div className="bg-secondary-300">
      {/* Header Mobile Page */}
      <header className="xl:hidden px-4 py-2 flex items-center space-x-4 bg-primary-500">
        <div className="">
          <UserCircleIcon 
            className="text-white w-6 h-6"
          />
        </div>
        <div className="w-full">
          <div className="flex justify-center items-center text-gray-300 space-x-1">
            <SearchIcon
              className="w-5 h-4"
            />
            <span>
              Rechercher
            </span>
          </div>
          <div className="border-b border-gray-200"/>
        </div>
        <div className="">
          <FbIcon />
        </div>
      </header>

      {/* Navigation Page */}
      <Nav>
        {navDimensionStyle.map((item, key) => (
          <NavItem
            key={key}
            item={item}
            isActive={key === 0}
            notificationCount={key === 3 ? 7 : null}
          />
        ))}
      </Nav>
    
      {/* Form to create post on mobile terminal */}
      <FormWhatWouldYouSay
        styleContainer="mt-0.5 bg-white xl:hidden"
      />

      {/* Stories */}
      <Stories
        className="mt-2 pb-3 bg-white xl:bg-transparent px-2 overflow-x-auto xl:hidden"
      >
        <div className="flex items-center space-x-2">
          <StoryForm
            story={{
              id: null,
              profileImg: null,
              name: 'Créer une story',
              storyImage: 'https://scontent.fdkr3-1.fna.fbcdn.net/v/t1.6435-9/164138734_110378421139999_7798075979519869159_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeFqK6nG_fftUF3cWzUPCkZtyQ8TjlV_SMDJDxOOVX9IwJtiaAxta2SPgZiGBrBbiRrHGfAMSjHeTHUyZ7NhUJUR&_nc_ohc=Hu6ECKCMtR8AX9lFBxN&_nc_ht=scontent.fdkr3-1.fna&oh=e1b291845aaabe1f006eec30fd3d9277&oe=617D96A9'
            }}
          />

          {storiesData.map(story => (
            <StoryItem
              key={story.id}
              story={story}
              className="space-x-2"
            />
          ))}
        </div>
      </Stories>

      {/* Layout */}
      <Layout
        className="w-full hidden xl:flex items-start justify-between px-1"
        leftComponent={
          <FixedSidbar>
            {sidbarData.map((item, key) => (
              <a
                key={key}
                href="https://madioubah.herokuapp.com"
                className={
                  classNames(
                    `w-full px-1 mx-2 py-2 flex items-center rounded overflow-x-hidden hover:bg-secondary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-4`
                  )
                }
              >
                <div className="w-10 h-10">
                  <img
                    alt={item.logo}
                    src={item.logo}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <h6 className="ml-2 font-semibold text-gray-700">
                  {capitalizeFirstLetter(item.title)}
                </h6>
              </a>
            ))}
          </FixedSidbar>
        }
        centerComponent={
          <>
            <Stories
              className="px-2 xl:px-0 py-6 bg-white xl:bg-transparent overflow-x-hidden hidden xl:block"
            >
              <div className="flex items-center space-x-2">
                <StoryForm
                  story={{
                    id: null,
                    profileImg: null,
                    name: 'Créer une story',
                    storyImage: 'https://scontent.fdkr3-1.fna.fbcdn.net/v/t1.6435-9/164138734_110378421139999_7798075979519869159_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeFqK6nG_fftUF3cWzUPCkZtyQ8TjlV_SMDJDxOOVX9IwJtiaAxta2SPgZiGBrBbiRrHGfAMSjHeTHUyZ7NhUJUR&_nc_ohc=Hu6ECKCMtR8AX9lFBxN&_nc_ht=scontent.fdkr3-1.fna&oh=e1b291845aaabe1f006eec30fd3d9277&oe=617D96A9'
                  }}
                />

                {storiesData.map(story => (
                  <StoryItem
                    key={story.id}
                    story={story}
                    className="space-x-2"
                  />
                ))}
              </div>
            </Stories>
            
            <FormWhatWouldYouSay
              styleContainer="bg-white rounded-lg shadow"
            />
            
            <Salons
              styleContainer="flex items-center justify-center h-16 space-x-2 overflow-hidden w-full my-4 bg-white rounded-lg"
            >
              <div className="flex justify-center items-center w-60">
                <ButtonCreateSalon
                  className="inline-block"
                />
              </div>

              <div className="w-full h-full flex space-x-4 overflow-hidden">
                {users.map((user, key) => (
                  <SalongItem
                    key={key}
                    user={user}
                  />
                ))}
              </div>
            </Salons>

            <Posts className="hidden xl:block mt-3">
              {posts.map((post, key) => (
                <PostItem
                  key={key}
                  post={post}
                  className="bg-white shadow rounded-lg my-4 py-3"
                />
              ))}
            </Posts>
          </>
        }
        rightComponent={
          <FixedSidbar>
            <div className="px-2 flex justify-between items-center pb-4">
              <h6 className="text-gray-600 font-semibold">Contacts</h6>
              
              <div className="flex items-center space-x-4 text-gray-600">
                <VideoCameraIcon
                  className="w-5 h-5"
                />
                <SearchIconOutline
                  className="w-4 h-4"
                />
                <DotsHorizontalIcon
                  className="w-5 h-5"
                />
              </div>
            </div>

            {users.map(({ name, src }, key) => (
              <button
                key={key}
                className={classNames(`px-2 py-2 w-full flex items-center rounded hover:bg-secondary-600`)}
              >
                <ImageProfileUser
                  src={src}
                  widthClass="w-8"
                  heightCLass="h-8"
                  
                  widthClassDot = 'w-1.5'
                  heightClassDot = 'h-1.5'
                  hasStory={key % 7 === 0}
                  widthClassContainer = 'w-2.5'
                  heightClassContainer = 'h-2.5'
                />

                <h6 className="truncate ml-2 font-semibold text-gray-700">
                  {capitalizeFirstLetter(name)}
                </h6>
              </button>
            ))}
          </FixedSidbar>
        }
      />

      <Posts className="xl:hidden">
        {posts.map((post, key) => (
          <PostItem
            key={key}
            post={post}
            className="bg-white px-2 py-2 mt-2"
          />
        ))}
      </Posts>
      
      <div className="hidden xl:block">
        {usersInConversation.map(({ className, component }, key) => (
          <FloatingButtonMakeMessage key={key} className={classNames(className, 'right-5')}>
            {component}
          </FloatingButtonMakeMessage>  
        ))}
      </div>
    </div>
  );
}