export enum LAYOUT_OPTIONS {
  HOME = "home",
  EXPLORER = "explorer",
  CERTIFICATE = "certificate",
  USER = "user",
}

export enum EXPLORER_LAYOUT_OPTIONS {
  MUSIC = "music",
  RESEARCH = "research",
  CODE = "code",
  CONTENT = "content",
}

type LayoutOption = (typeof LAYOUT_OPTIONS)[keyof typeof LAYOUT_OPTIONS];
type ExplorerOption =
  (typeof EXPLORER_LAYOUT_OPTIONS)[keyof typeof EXPLORER_LAYOUT_OPTIONS];

export function getLayoutValue(pathname: string, routeFrag) {
  console.log("getLayoutValue", pathname, routeFrag);
  switch (routeFrag) {
    case LAYOUT_OPTIONS.HOME:
      return {
        pathBase: LAYOUT_OPTIONS.HOME,
        selectedLayout: LAYOUT_OPTIONS.HOME,
      };
    case LAYOUT_OPTIONS.USER:
      return {
        pathBase: LAYOUT_OPTIONS.USER,
        selectedLayout: LAYOUT_OPTIONS.USER,
      };
    case LAYOUT_OPTIONS.CERTIFICATE:
      return {
        pathBase: LAYOUT_OPTIONS.CERTIFICATE,
        selectedLayout: LAYOUT_OPTIONS.CERTIFICATE,
      };
    case Object.values(EXPLORER_LAYOUT_OPTIONS).find((option) =>
      pathname.includes(option)
    ):
      return {
        pathBase:
          Object.values(EXPLORER_LAYOUT_OPTIONS).find((option) =>
            pathname.includes(option)
          ) ?? "/",
        selectedLayout: LAYOUT_OPTIONS.EXPLORER,
      };
    default:
      return {
        pathBase: LAYOUT_OPTIONS.HOME,
        selectedLayout: LAYOUT_OPTIONS.HOME,
      };
  }
}
