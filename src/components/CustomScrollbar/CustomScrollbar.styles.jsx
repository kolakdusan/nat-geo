import styled from 'styled-components'

export const TrackVertical = styled.div.attrs({
  className:
    '!w-[10px] h-[calc(100%-10px)] right-0 mt-[50px] z-[50000] rounded-full transition-all duration-300 ease bg-[rgba(255,255,255,0)] hover:!w-[17px] active:!w-[17px]',
})`
  &:hover,
  &:active {
    /* width: 17px !important; */
    background: rgba(255, 255, 255, 0.1);
    .thumb-vertical {
      background: rgba(255, 255, 255, 0.3);
    }
  }
`

export const ThumbVertical = styled.div`
  border-radius: 50px;
  background: rgba(255, 255, 255, 0.3);
  transition: background-color 0.15s ease;
  &:active {
    background: rgba(255, 255, 255, 0.5);
  }
`

// Normal CSS in case I want to get rid of tailwind:

/* width: 10px !important;
  height: calc(100% - 50px);
  right: 0;
  margin-top: 50px;
  z-index: 50000;
  border-radius: 9999px;
  transition: all 0.3s ease;
  background: rgba(255, 255, 255, 0); */
