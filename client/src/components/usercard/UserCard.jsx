import React, { useState, useEffect, useMemo, useRef } from "react";
import styled from "styled-components";
import Header from "./Header";
import TinderCard from "react-tinder-card";
import { getAllProfiles } from "../../services/profileService";
import { keyframes } from "styled-components";

const popup = keyframes`

  0%   { transform: scale(1,1) }
  10%  { transform: scale(1.1,1.1) }
  30%  { transform: scale(.9,.9) }
  50%  { transform: scale(1,1) }
  57%  { transform: scale(1,1) }
  64%  { transform: scale(1,1) }
  100% { transform: scale(1,1) }
`;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  margin-top: 15%;
  .row {
    flex-direction: row !important;
  }

  .row > * {
    margin: 5px;
  }

  h2 {
    color: #fff;
    text-shadow: 0px 0px 60px 0px rgba(0, 0, 0, 0.3);
  }
`;

const CardContainer = styled.div`
  width: 200vw;
  max-width: 460px;
  height: 600px;
  .swipe {
    position: absolute;
  }
  .swipe:last-of-type {
  }
  
`;

const Card = styled.div`
  position: relative;
  background-color: #ffffff;
  max-width: 460px;
  height: 600px;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.3);
  border-radius: 20px;
  background-size: cover;
  background-position: center;
  /* width: 100%;
  height: 100%;  */

  h3 {
    position: absolute;
    bottom: 0;
    margin: 10px;
    color: #fff;
  }

  h4 {
    position: absolute;
    top: 0;
    margin: 10px;
    color: #fff;
  }

  h5 {
    position: absolute;
    margin-top: 50px;
    margin-left: 10px;
    color: #f30909;
  }
`;

const StyledP = styled.p`
  color: transparent;
`;

const StyledH = styled.div`
  display: flex;

  .info {
    width: 100%;
    height: 28px;
    justify-content: center;

    color: #f57a8f;
    animation-name: ${popup};
    animation-duration: 800ms;
  }
`;

const ButtonContainer = styled.div`
  margin: 20px;
  display: flex;

  button {
    flex-shrink: 0;
    padding: 10px;
    border-radius: 5px;
    border: none;
    color: #fff;
    font-size: 18px;
    background-color: #a30505;
    transition: 200ms;
    margin: 0 10px;
    font-weight: bolder;
    width: 160px;
    box-shadow: 0px 0px 30px 0px rgba(0, 0, 0, 0.1);
  }

  button:hover {
    transform: scale(1.05);
  }
`;

const UserCard = () => {
  const [users, setUsers] = useState([]);

  const [currentIndex, setCurrentIndex] = useState(users.length - 1);
  const [lastDirection, setLastDirection] = useState();
  // used for outOfFrame closure
  const currentIndexRef = useRef(currentIndex);

  const childRefs = useMemo(
    () =>
      Array(users.length)
        .fill(0)
        .map((i) => React.createRef()),
    [users]
  );

  const updateCurrentIndex = (val) => {
    setCurrentIndex(val);
    currentIndexRef.current = val;
  };

  const canGoBack = currentIndex < users.length - 1;

  const canSwipe = currentIndex >= 0;

  // set last direction and decrease current index
  const Swiped = (direction, nameToDelete, index, data) => {
    setLastDirection(direction);
    updateCurrentIndex(index - 1);
    // if (direction === "right"){
    // likes.push(data);
    // }
  };

  const outOfFrame = (full_name, idx) => {
    console.log(
      `${full_name} (${idx}) left the screen!`,
      currentIndexRef.current
    );

    // handle the case in which go back is pressed before card goes outOfFrame
    currentIndexRef.current >= idx && childRefs[idx].current.restoreCard();
  };

  const swipe = async (dir) => {
    if (canSwipe && currentIndex < users.length) {
      await childRefs[currentIndex].current.swipe(dir); // Swipe the card!
    }
    console.log(swipe);
  };

  // increase current index and show card
  const goBack = async () => {
    if (!canGoBack) return;
    const newIndex = currentIndex + 1;
    updateCurrentIndex(newIndex);
    await childRefs[newIndex].current.restoreCard();
  };

  useEffect(() => {
    getAllProfiles(users).then((res) => setUsers(res));
  }, [users]);

  return (
    <>
      <Header />
      <StyledContainer>
        <CardContainer>
          {users.map((user, index) => (
            <TinderCard
              ref={childRefs[index]}
              className="swipe"
              key={user._id}
              preventSwipe={["up", "down"]}
              onSwipe={(dir) =>
                Swiped(
                  dir,
                  index,
                  user.full_name,
                  user.profile_photo,
                  user.profile_description,
                  user.job,
                  user.city
                )
              }
              onCardLeftScreen={() =>
                outOfFrame(
                  index,
                  user.full_name,
                  user.profile_photo,
                  user.profile_description,
                  user.job,
                  user.city
                )
              }
            >
              <Card
                style={{
                  backgroundImage: `url(${user.profile_photo})`,
                  filter: `blur(1px)`,
                }}
              >
                <h3>{user?.full_name}</h3>
                <h4>{user?.job}</h4>
                <h5>{user?.city}</h5>
                <StyledP>{user?.profile_description}</StyledP>
              </Card>
            </TinderCard>
          ))}
        </CardContainer>
        <ButtonContainer>
          <button
            style={{ backgroundColor: !canSwipe && "#f79bb6" }}
            onClick={() => swipe("left")}
          >
            Swipe left!
          </button>
          <button
            style={{ backgroundColor: !canGoBack && "#f79bb6" }}
            onClick={() => goBack()}
          >
            Undo swipe!
          </button>
          <button
            style={{ backgroundColor: !canSwipe && "#f79bb6" }}
            onClick={() => swipe("right")}
          >
            Swipe right!
          </button>
        </ButtonContainer>
        {lastDirection ? (
          <StyledH key={lastDirection}>
            <h2 className="info">You swiped {lastDirection}</h2>
          </StyledH>
        ) : (
          <StyledH>
            <h2 className="info">
              Swipe a card or press a button to get Restore Card button visible!
            </h2>
          </StyledH>
        )}
      </StyledContainer>{" "}
    </>
  );
};

export const likes = [];
export default UserCard;
