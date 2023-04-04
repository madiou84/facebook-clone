import {
  ChevronRightIcon,
  DotsHorizontalIcon,
  SearchIcon as SearchIconOutline,
} from "@heroicons/react/outline";
import { PencilAltIcon, VideoCameraIcon } from "@heroicons/react/solid";
import classNames from "classnames";
import { useCallback, useState } from "react";

import {
  CONVERSATION_USER_DEFAULT_VALUE,
  POSTS,
  SIDBAR_DATA,
  SOTRIES_DATA,
  USERS,
  USER_IN_CONVERSATION,
} from "../../constants";
import { MOBILE_NAVIGATION_ICONS } from "../../constants/data";
import { ConversationModal } from "../../types";
import {
  ButtonCreateSalon,
  FixedSidbar,
  FloatingButtonMakeMessage,
  FormWhatWouldYouSay,
  ImageProfileUser,
  Layout,
  Nav,
  NavItem,
  PostItem,
  Posts,
  SalongItem,
  Salons,
  Stories,
  StoryForm,
  StoryItem,
  WindowConversationBottom,
} from "../../ui";
import { Header } from "../../ui/Head/Header";
import { NavMobile } from "../../ui/Nav/NavMobile";
import { capitalizeFirstLetter } from "../../utils/helper";
import { Icon } from "../../ui/Icon/Icon";

export default function App() {
  const [conversationWindow, setConversationWindow] =
    useState<ConversationModal>(CONVERSATION_USER_DEFAULT_VALUE);

  const [notifMobile, setNotifMobile] = useState(MOBILE_NAVIGATION_ICONS);

  const onClickRow = useCallback((item: any) => {
    const index = notifMobile.findIndex((it) => it === item);
    if (index !== -1) {
      const newData = [...notifMobile].map((it) => {
        it.isActive = false;
        return it;
      });
      const newItem = { ...notifMobile.at(index) };
      newData[index].isActive = !newItem.isActive;
      setNotifMobile(newData);
    }
  }, []);

  return (
    <div className="w-full bg-secondary-300">
      {/*********************************************
       *********** MOBILE VIEW HEADER ***************
       *********************************************/}
      {/* Header Mobile Page */}
      <Header />

      {/* Navbar Mobile */}
      <NavMobile>
        {notifMobile.map((item, key) => (
          <NavItem key={key} item={item} onClickRow={onClickRow} />
        ))}
      </NavMobile>

      {/* Form to create post on mobile terminal */}
      <FormWhatWouldYouSay styleContainer="mt-0.5 bg-white xl:hidden" />

      {/* Stories Mobile */}
      <Stories className="px-2 mt-2 pb-3 bg-white xl:bg-transparent overflow-x-auto xl:hidden">
        <div className="flex items-center space-x-2">
          <StoryForm
            story={{
              id: null,
              profileImg: null,
              name: "Créer une story",
            }}
          />

          {SOTRIES_DATA.map((story) => (
            <StoryItem key={story.id} story={story} className="space-x-2" />
          ))}
        </div>
      </Stories>
      {/*********************************************
       *********** END MOBILE VIEW HEADER ***********
       *********************************************/}

      {/*********************************************
       *************** NAVBAR WEB *******************
       *********************************************/}
      <Nav />
      {/*********************************************
       ************* END NAVBAR WEB *****************
       *********************************************/}

      {/* Layout XL */}
      <Layout
        className="hidden xl:flex xl:items-start xl:justify-between"
        leftComponent={
          <FixedSidbar>
            {SIDBAR_DATA.map((item, key) => (
              <a
                key={key}
                href="https://www.facebook.com/madiou.samantan"
                className="mt-4 py-2 px-2 flex items-center rounded hover:bg-secondary-700"
              >
                <div className="w-10 h-10">
                  <img
                    alt={item.src}
                    src={item.src}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <h6 className="ml-2 font-medium text-gray-700">
                  {capitalizeFirstLetter(item.title)}
                </h6>
              </a>
            ))}
          </FixedSidbar>
        }
        centerComponent={
          <>
            <div className="mt-4 bg-white rounded-lg">
              <div className="py-2">
                <div className="border-b border-gray-500/20">
                  <div className="px-2 flex items-center justify-evenly font-bold">
                    <button className="w-full h-12 text-blue-500 border-b-2 border-blue-500">
                      <span className="flex items-center justify-center space-x-2">
                        <Icon name="story" className="w-5 h-5" />
                        <span>Stories</span>
                      </span>
                    </button>
                    <button className="w-full rounded h-12 hover:bg-gray-100">
                      <span className="flex items-center justify-center space-x-2 text-gray-600">
                        <Icon name="reel" className="w-5 h-5" />
                        <span>Réels</span>
                      </span>
                    </button>
                  </div>
                </div>
              </div>

              <Stories className="px-2 mt-4 xl:px-0 bg-white xl:bg-transparent hidden xl:block relative">
                <div className="flex items-center pb-1 space-x-3 overflow-x-scroll sidbar">
                  <button className="absolute z-10 right-[12px]">
                    <div className="bg-gray-100 rounded-full w-12 h-12 flex items-center justify-center">
                      <ChevronRightIcon className="w-6 h-6 opacity-60" />
                    </div>
                  </button>

                  <StoryForm
                    className="shadow rounded-xl"
                    story={{
                      id: null,
                      profileImg: null,
                      name: "Créer une story",
                    }}
                  />

                  {SOTRIES_DATA.map((story) => (
                    <StoryItem
                      story={story}
                      key={story.id}
                      className="shadow rounded-xl"
                    />
                  ))}
                </div>
              </Stories>
            </div>

            <FormWhatWouldYouSay styleContainer="px-2 mt-4 bg-white rounded-lg shadow" />

            <Salons>
              <div className="overflow-x-scroll sidbar flex items-center">
                <div className="pr-4">
                  <ButtonCreateSalon className="whitespace-nowrap" />
                </div>

                <div className="w-full h-full flex space-x-4">
                  {USERS.map((user, key) => (
                    <SalongItem key={key} user={user} />
                  ))}
                </div>
              </div>
            </Salons>

            <Posts className="hidden xl:block mt-3">
              {POSTS.map((post) => (
                <PostItem
                  key={post.id}
                  post={post}
                  className="bg-white shadow rounded-lg my-4 py-3"
                />
              ))}
            </Posts>
          </>
        }
        rightComponent={
          <FixedSidbar className="right-0">
            <div className="px-2">
              <div className="mt-4 flex justify-between items-center">
                <h6 className="text-gray-600 font-semibold">Contacts</h6>

                <div className="flex items-center space-x-4 text-gray-600">
                  <VideoCameraIcon className="w-5 h-5" />
                  <SearchIconOutline className="w-4 h-4" />
                  <DotsHorizontalIcon className="w-5 h-5" />
                </div>
              </div>

              {USERS.map((user, key) => (
                <a
                  key={key}
                  href="https://www.facebook.com/madiou.samantan"
                  className="flex items-center truncate mt-2 py-2 px-2 space-x-4 rounded hover:bg-secondary-700"
                >
                  <ImageProfileUser
                    src={user.src}
                    widthClass="w-8"
                    heightCLass="h-8"
                    widthClassDot="w-1.5"
                    heightClassDot="h-1.5"
                    hasStory={key % 10 === 0}
                  />
                  <h6 className="font-medium text-gray-700 truncate">
                    {capitalizeFirstLetter(user.name)}
                  </h6>
                </a>
              ))}
            </div>
          </FixedSidbar>
        }
      />

      <Posts className="xl:hidden">
        {POSTS.map((post, key) => (
          <PostItem key={key} post={post} className="bg-white px-2 py-2 mt-2" />
        ))}
      </Posts>

      {conversationWindow.isOpen && (
        <WindowConversationBottom
          positionRight="right-20"
          user={conversationWindow.data}
          onClickMinus={() =>
            setConversationWindow((prevState) => ({
              ...prevState,
              isOpen: false,
            }))
          }
          onClickClose={() =>
            setConversationWindow((prevState) => ({
              ...prevState,
              isOpen: false,
            }))
          }
        />
      )}

      <div className="hidden xl:block">
        {USER_IN_CONVERSATION.map(({ className, src, name }, key) => {
          return (
            <div key={key}>
              <FloatingButtonMakeMessage
                className={classNames(className, "right-4")}
                onClick={() =>
                  setConversationWindow((prevState) => ({
                    ...prevState,
                    isOpen: true,
                    data: { name, src },
                  }))
                }
              >
                <ImageProfileUser
                  src={src}
                  hasStory={false}
                  widthClass="w-12"
                  heightCLass="h-12"
                  widthClassDot="w-3"
                  heightClassDot="h-3"
                />
              </FloatingButtonMakeMessage>

              <FloatingButtonMakeMessage className="bottom-4 right-4">
                <PencilAltIcon className="w-6 h-6" />
              </FloatingButtonMakeMessage>
            </div>
          );
        })}
      </div>
    </div>
  );
}
