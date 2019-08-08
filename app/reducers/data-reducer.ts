import { digitsFromScoreType } from "../utils/common"

const dataReducerInitialState = {
  status: "INIT",
  userInfo: {
    status: "NOT_RECEIVED",
    data: {},
  },
  gpa: {
    status: "NOT_RECEIVED",
    data: {
      gpaSemestral: {},
      gpaDetailed: {},
      gpaOverall: {},
    },
  },
  library: {
    status: "NOT_RECEIVED",
    data: {},
  },
  course: {
    status: "NOT_RECEIVED",
    data: {},
  },
  ecard: {
    status: "NOT_RECEIVED",
    auth: {
      status: "NOT_BOUND",
      cardId: "",
      password: "",
    },
    profile: undefined,
    turnover: undefined,
    lineChart: undefined,
    total: undefined,
  },
}

export const dataReducer = (state = dataReducerInitialState, action) => {
  switch (action.type) {
    case "CLEAR_ALL_DATA":
      state = dataReducerInitialState
      break

    case "SET_USER_DATA":
      state = {
        ...state,
        status: "MODIFIED",
        userInfo: {
          status: "VALID",
          data: action.payload,
        },
      }
      break

    case "SET_GPA_DATA":
      const semestralData = action.payload.data
      const statData = action.payload.stat
      let extractedData = {
        gpaSemestral: {
          weighted: semestralData.map((raw, index) => {
            return { x: index + 1, y: raw.stat.score }
          }),
          gradePoints: semestralData.map((raw, index) => {
            return { x: index + 1, y: raw.stat.gpa }
          }),
          credits: semestralData.map((raw, index) => {
            return { x: index + 1, y: raw.stat.credit }
          }),
        },
        gpaOverall: {
          weighted: statData.total.score.toFixed(digitsFromScoreType("weighted")),
          gradePoints: statData.total.gpa.toFixed(digitsFromScoreType("gradePoints")),
          credits: statData.total.credit.toFixed(digitsFromScoreType("credits")),
        },
        gpaDetailed: semestralData, // SemestralData here actually contains all courses in detail, correcting semantics here.
      }
      console.log(extractedData)
      state = {
        ...state,
        status: "MODIFIED",
        gpa: {
          status: "VALID",
          data: extractedData,
        },
      }
      break

    case "SET_COURSE_DATA":
      let payload = action.payload
      delete Object.assign(payload, { courses: payload.data }).data // Replace object key 'data' with 'courses', semantically
      state = {
        ...state,
        status: "MODIFIED",
        course: {
          status: "VALID",
          data: payload,
        },
      }
      break

    case "SET_LIBRARY_DATA":
      state = {
        ...state,
        status: "MODIFIED",
        library: {
          status: "VALID",
          data: action.payload,
        },
      }
      break

    case "SET_ECARD_AUTH":
      state = {
        ...state,
        status: "MODIFIED",
        ecard: {
          ...state.ecard,
          auth: {
            status: "BOUND",
            cardId: action.payload.cardId,
            password: action.payload.password,
          },
        },
      }
      break

    case "SET_ECARD_PROFILE":
      state = {
        ...state,
        status: "MODIFIED",
        ecard: {
          ...state.ecard,
          status: "VALID",
          profile: action.payload,
        },
      }
      break

    case "SET_ECARD_TURNOVER":
      state = {
        ...state,
        status: "MODIFIED",
        ecard: {
          ...state.ecard,
          turnover: action.payload,
        },
      }
      break

    case "SET_ECARD_TOTAL":
      state = {
        ...state,
        status: "MODIFIED",
        ecard: {
          ...state.ecard,
          total: action.payload,
        },
      }
      break

    case "SET_ECARD_LINE_CHART":
      state = {
        ...state,
        status: "MODIFIED",
        ecard: {
          ...state.ecard,
          lineChart: action.payload,
        },
      }
      break
  }
  return state
}
