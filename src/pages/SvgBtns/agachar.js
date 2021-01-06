import * as React from "react"
import { SvgXml } from "react-native-svg"

function Agachar(props) {
    const svg = `<?xml version="1.0" standalone="no"?>
    <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
     "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
    <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
     width="512.000000pt" height="512.000000pt" viewBox="0 0 512.000000 512.000000"
     preserveAspectRatio="xMidYMid meet">

    <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
    fill="#000000" stroke="none">
    <path d="M2185 4678 c6 -19 5 -21 -6 -10 -17 16 -53 16 -46 -1 4 -10 -8 -12
    -54 -9 -52 4 -58 2 -53 -12 5 -13 1 -15 -25 -10 -26 6 -30 4 -25 -10 7 -17
    -11 -23 -21 -6 -11 18 -45 11 -54 -12 -5 -14 -10 -17 -15 -10 -13 22 -53 14
    -60 -12 -5 -22 -10 -24 -46 -19 -31 4 -40 2 -40 -9 0 -10 -8 -13 -30 -10 -25
    4 -29 2 -24 -13 6 -15 4 -16 -14 -6 -18 9 -21 8 -24 -12 -2 -18 -8 -21 -35
    -19 -24 2 -33 -1 -33 -11 0 -11 -7 -13 -21 -10 -16 4 -20 2 -17 -8 7 -21 -20
    -45 -35 -30 -18 18 -35 13 -39 -11 -2 -18 -9 -22 -30 -20 -22 2 -26 -1 -21
    -14 5 -13 2 -15 -17 -9 -19 6 -22 4 -17 -9 7 -17 -8 -22 -18 -6 -4 6 -11 8
    -16 4 -5 -3 -6 -10 -3 -16 9 -14 -17 -29 -40 -22 -13 5 -18 2 -14 -7 7 -20
    -36 -59 -53 -48 -10 6 -16 2 -20 -14 -4 -17 -11 -21 -33 -19 -19 2 -26 -1 -21
    -8 11 -18 -85 -111 -107 -104 -11 3 -18 0 -18 -8 0 -17 -121 -138 -139 -138
    -8 0 -11 -6 -7 -16 8 -21 -11 -45 -30 -37 -17 6 -19 -8 -3 -24 8 -8 8 -13 0
    -17 -6 -4 -11 -2 -11 3 0 6 -7 11 -15 11 -9 0 -12 -6 -9 -15 4 -10 0 -15 -11
    -15 -12 0 -15 -5 -11 -16 7 -19 -20 -54 -42 -54 -9 0 -12 -6 -8 -16 7 -18 -34
    -62 -52 -56 -15 5 -16 -10 0 -26 9 -9 7 -12 -12 -12 -19 0 -21 -3 -12 -12 17
    -17 15 -31 -4 -24 -13 5 -15 2 -11 -14 3 -13 0 -20 -10 -20 -10 0 -13 -6 -9
    -16 8 -21 -11 -45 -30 -37 -16 6 -19 -12 -4 -22 6 -4 4 -12 -5 -21 -8 -9 -19
    -13 -24 -10 -13 8 -21 -18 -11 -35 10 -16 -6 -39 -27 -39 -11 0 -13 -7 -8 -30
    6 -26 3 -31 -19 -40 -26 -10 -36 -43 -16 -55 6 -4 8 -11 4 -16 -3 -5 -10 -6
    -16 -3 -8 5 -9 -6 -5 -35 5 -38 3 -42 -20 -47 -23 -6 -25 -10 -19 -45 5 -32 3
    -37 -9 -33 -18 7 -20 -11 -3 -22 8 -5 4 -10 -10 -15 -15 -6 -20 -15 -18 -33 1
    -15 6 -29 9 -33 13 -12 7 -25 -9 -19 -13 5 -15 1 -10 -20 6 -22 4 -25 -10 -20
    -14 6 -16 -2 -12 -69 3 -62 1 -74 -11 -70 -11 4 -13 -5 -9 -44 4 -38 2 -48 -9
    -44 -9 4 -13 -3 -13 -22 0 -20 4 -26 15 -22 17 7 30 -9 15 -18 -6 -4 -10 -75
    -10 -185 0 -110 4 -181 10 -185 15 -9 2 -25 -15 -18 -11 4 -15 -2 -15 -22 0
    -19 4 -26 14 -22 11 4 13 -3 8 -35 -4 -33 -2 -40 9 -36 11 4 13 -10 10 -78 -3
    -75 -1 -83 13 -78 14 5 16 2 10 -20 -5 -21 -3 -25 10 -20 16 6 23 -11 8 -20
    -6 -4 -7 -31 -3 -67 1 -4 9 -6 19 -5 14 1 17 -6 14 -49 -3 -44 -1 -51 20 -60
    27 -12 37 -45 14 -45 -9 0 -16 -4 -16 -10 0 -5 6 -10 14 -10 23 0 37 -24 23
    -39 -9 -10 -6 -16 15 -32 22 -17 26 -25 21 -50 -4 -23 -2 -28 9 -24 21 8 44
    -21 30 -38 -7 -8 -7 -18 -2 -27 6 -8 10 -11 10 -6 0 5 7 3 15 -4 9 -8 12 -22
    8 -43 -5 -26 -4 -29 11 -24 13 5 15 2 10 -20 -5 -19 -4 -24 5 -19 18 12 40
    -12 33 -36 -3 -13 -1 -19 5 -15 15 9 35 -17 28 -35 -4 -11 2 -18 20 -22 21 -5
    24 -10 19 -33 -5 -18 -3 -24 4 -19 18 11 51 -29 45 -55 -5 -17 -3 -21 9 -16
    22 8 91 -64 82 -86 -4 -11 -1 -17 7 -17 21 0 218 -201 212 -216 -6 -17 13 -19
    23 -3 9 15 94 -70 87 -87 -6 -17 9 -18 25 -2 9 9 12 7 12 -11 0 -20 2 -22 15
    -11 9 7 19 10 22 6 4 -4 2 -10 -4 -14 -20 -12 2 -35 26 -27 17 5 20 3 14 -11
    -5 -14 -3 -16 12 -10 20 7 55 -18 55 -41 0 -10 6 -12 22 -8 17 6 20 4 14 -10
    -5 -14 -2 -16 19 -11 19 5 23 3 19 -9 -7 -18 7 -20 24 -3 9 9 12 7 12 -10 0
    -12 5 -22 10 -22 6 0 10 5 10 10 0 6 5 10 11 10 6 0 8 -7 5 -16 -5 -12 0 -15
    22 -13 34 4 55 -8 48 -27 -4 -12 3 -14 32 -12 27 2 37 -1 37 -12 0 -21 24 -35
    38 -21 16 16 27 13 20 -6 -5 -13 -2 -15 16 -10 18 4 21 2 17 -10 -5 -13 0 -15
    34 -10 32 4 40 2 40 -10 0 -13 8 -14 40 -9 36 6 41 4 49 -17 8 -20 16 -24 44
    -22 19 1 39 5 46 9 14 9 39 -15 33 -33 -4 -11 11 -13 72 -9 57 2 76 0 76 -9 0
    -15 26 -17 35 -3 9 15 25 2 18 -15 -4 -13 34 -15 287 -15 253 0 291 2 287 15
    -7 17 9 30 18 15 9 -14 35 -12 35 3 0 9 19 11 76 9 61 -4 76 -2 72 9 -6 18 19
    42 33 33 7 -4 27 -8 46 -9 28 -2 36 2 44 22 8 21 13 23 49 17 32 -5 40 -4 40
    9 0 12 8 14 40 10 34 -5 39 -3 34 10 -4 12 -1 14 17 10 18 -5 21 -3 16 10 -7
    19 4 22 20 6 14 -14 33 -3 33 19 0 12 3 13 12 4 17 -17 31 -15 24 3 -4 12 0
    14 21 9 22 -6 25 -4 20 9 -8 21 10 32 45 28 22 -2 27 1 22 13 -3 9 -1 16 5 16
    6 0 11 -4 11 -10 0 -5 5 -10 10 -10 6 0 10 10 10 22 0 17 3 19 12 10 17 -17
    31 -15 24 3 -4 12 0 14 21 9 19 -5 24 -4 19 5 -12 18 12 40 36 33 13 -3 19 -1
    15 5 -10 15 17 35 37 27 10 -4 16 -1 16 7 1 8 10 25 20 38 17 19 23 21 35 11
    13 -10 15 -9 15 11 0 18 3 20 12 11 16 -16 31 -15 25 2 -8 20 105 128 126 120
    11 -4 17 -1 17 8 0 17 161 178 179 178 8 0 11 6 7 17 -8 21 80 114 100 106 17
    -6 18 9 2 25 -9 9 -8 12 6 12 13 0 16 5 11 20 -3 11 -2 20 3 20 6 0 12 -5 14
    -12 8 -22 30 4 24 28 -5 18 -3 22 9 18 10 -4 15 0 15 14 0 11 -6 22 -12 25 -7
    2 -10 8 -6 12 4 4 14 2 23 -5 12 -10 16 -9 21 3 3 9 3 21 -1 27 -3 5 1 10 10
    10 12 0 15 6 10 22 -6 17 -4 20 10 14 14 -5 16 -2 11 19 -5 20 -2 26 20 31 18
    5 22 10 15 17 -16 16 -14 30 3 24 18 -7 28 17 14 31 -15 15 10 45 30 37 12 -4
    13 1 9 25 -5 22 -3 30 8 30 18 0 19 12 3 29 -11 11 -10 13 4 8 20 -7 34 8 18
    18 -14 9 7 35 28 35 11 0 14 9 10 45 -4 36 -2 45 10 45 11 0 13 8 9 35 -4 26
    -2 35 9 35 17 0 18 12 2 29 -11 11 -10 13 5 8 9 -4 17 -3 18 1 4 41 3 64 -3
    68 -15 9 -8 26 8 20 13 -5 15 -1 10 19 -5 19 -3 23 9 19 11 -5 15 1 15 25 0
    21 -5 31 -15 31 -8 0 -15 7 -15 15 0 8 7 15 16 15 13 0 15 7 11 30 -5 23 -3
    28 8 23 13 -4 15 29 15 241 0 166 -3 246 -11 246 -5 0 -8 4 -4 10 3 5 12 7 20
    3 12 -4 15 4 15 40 0 42 -2 45 -22 40 -19 -5 -21 -3 -10 8 6 7 12 25 12 41 0
    21 -4 26 -16 21 -13 -5 -15 -2 -9 15 4 15 2 22 -7 22 -10 0 -12 18 -10 75 3
    65 1 74 -12 69 -17 -6 -22 11 -7 20 5 4 8 14 6 24 -2 9 -4 20 -4 24 -1 4 -8 5
    -16 2 -8 -4 -15 -1 -15 5 0 6 5 11 10 11 6 0 10 9 10 21 0 15 -5 19 -15 15
    -13 -4 -14 2 -9 36 6 36 5 40 -10 35 -13 -5 -15 -2 -10 18 5 20 3 24 -10 19
    -13 -5 -15 -1 -10 25 4 18 3 31 -2 30 -21 -4 -26 2 -14 16 14 17 5 35 -18 35
    -12 0 -13 3 -4 12 17 17 15 31 -3 24 -12 -4 -14 0 -9 21 5 19 4 24 -5 19 -21
    -13 -41 13 -34 45 5 24 3 28 -11 23 -17 -7 -23 11 -6 21 15 10 12 25 -7 32
    -37 13 -52 34 -46 64 4 21 2 29 -9 29 -22 0 -49 35 -42 54 4 10 1 16 -9 16
    -11 0 -13 6 -9 22 4 16 1 20 -9 16 -18 -7 -65 37 -50 46 16 10 14 29 -3 23
    -19 -7 -58 36 -51 55 8 20 -14 35 -25 18 -5 -8 -10 -9 -14 -2 -3 6 -2 13 4 17
    15 9 12 28 -4 22 -15 -6 -286 261 -286 282 0 8 -6 11 -16 7 -21 -8 -45 11 -37
    30 6 16 -13 19 -23 3 -9 -15 -53 32 -46 49 3 9 -2 13 -14 11 -23 -4 -68 26
    -60 40 4 5 2 12 -3 15 -5 4 -12 2 -16 -4 -10 -17 -25 -11 -18 7 5 13 2 15 -12
    10 -22 -9 -46 9 -38 29 6 16 -12 19 -22 4 -9 -15 -25 -2 -18 15 6 18 -18 20
    -34 4 -15 -15 -42 9 -35 30 3 10 -1 12 -17 8 -15 -3 -21 -1 -21 10 0 12 -7 14
    -30 10 -23 -5 -28 -3 -23 8 6 17 -12 21 -22 5 -4 -6 -12 -4 -21 5 -9 8 -12 20
    -8 26 5 8 -3 10 -25 7 -23 -3 -31 -1 -31 10 0 11 -9 13 -40 9 -36 -5 -41 -3
    -46 19 -5 19 -13 24 -38 24 -18 0 -37 -5 -44 -12 -9 -9 -12 -8 -12 4 0 22 -19
    33 -33 19 -16 -16 -30 -13 -23 5 5 14 1 16 -25 10 -26 -5 -30 -3 -25 10 5 14
    -1 16 -53 12 -46 -3 -58 -1 -54 9 7 17 -48 18 -66 1 -11 -11 -12 -9 -6 10 l6
    22 -341 0 -341 0 6 -22z m552 -1034 c45 -9 123 -73 164 -134 33 -48 37 -63 41
    -131 3 -56 11 -91 29 -125 34 -66 64 -86 146 -93 83 -8 127 -33 180 -102 43
    -58 134 -204 163 -264 29 -58 60 -106 101 -156 20 -24 50 -74 68 -110 30 -64
    31 -72 31 -193 0 -115 -2 -131 -25 -175 -25 -50 -58 -83 -114 -113 -38 -21
    -32 -32 37 -62 69 -31 92 -66 92 -141 0 -35 -6 -75 -15 -91 -7 -15 -17 -53
    -21 -83 -7 -63 -43 -126 -77 -135 -59 -16 -147 1 -147 27 0 8 16 28 35 46 47
    43 48 93 3 162 -27 43 -36 49 -66 49 -19 0 -45 -9 -60 -21 -48 -36 -106 -72
    -137 -82 -16 -6 -43 -21 -60 -35 -16 -13 -66 -45 -110 -71 -44 -25 -91 -54
    -105 -63 -39 -29 -105 -23 -161 13 -75 48 -129 112 -129 153 0 51 44 129 132
    235 43 51 78 99 78 105 0 18 -20 39 -69 71 -24 16 -46 35 -48 43 -7 17 -62 45
    -78 38 -7 -2 -18 -28 -25 -57 -11 -47 -25 -66 -107 -151 -51 -54 -93 -102 -93
    -107 0 -5 -11 -23 -25 -39 -32 -38 -69 -155 -62 -196 3 -17 10 -55 16 -84 5
    -29 8 -59 5 -67 -9 -23 -55 -26 -320 -23 l-251 3 -36 28 c-42 32 -45 46 -16
    73 14 13 43 20 97 25 106 9 162 37 247 124 53 54 77 88 99 141 16 38 42 96 57
    130 16 33 29 69 29 80 0 10 14 46 30 79 17 33 30 65 30 72 0 7 9 27 20 45 11
    18 20 40 20 49 0 9 11 37 25 64 14 26 28 67 32 92 6 43 4 46 -49 101 -60 62
    -108 125 -108 140 0 14 -59 62 -75 62 -13 0 -40 -39 -81 -117 -10 -18 -30 -37
    -45 -44 -58 -24 -172 62 -143 108 6 10 26 26 44 35 36 19 79 86 80 126 0 21
    -4 22 -76 22 -87 0 -107 8 -124 50 -7 17 -22 32 -34 35 -11 2 -128 6 -258 7
    -225 3 -238 4 -260 24 -13 12 -41 33 -63 47 -38 25 -44 26 -115 18 -102 -11
    -165 -2 -165 23 0 13 10 22 27 27 15 4 40 17 55 29 32 25 60 21 108 -16 17
    -13 37 -24 44 -24 24 0 60 33 71 65 19 59 47 85 89 85 51 0 74 -20 86 -76 8
    -39 15 -49 35 -55 14 -4 136 -7 271 -8 l246 -1 69 45 c67 44 69 45 152 45 81
    0 85 -1 126 -34 50 -42 85 -56 136 -56 48 0 63 22 54 80 -9 54 -37 87 -85 100
    -46 13 -51 34 -15 77 13 15 34 49 46 76 24 52 128 153 164 160 35 7 111 7 143
    1z"/>
    <path d="M2337 2871 c-28 -10 -19 -22 52 -68 92 -61 133 -57 147 14 10 49 -14
    63 -104 62 -42 0 -85 -4 -95 -8z"/>
    <path d="M2702 2603 c-51 -36 -52 -37 -30 -49 13 -6 47 -14 76 -18 81 -10 103
    17 61 75 -27 38 -43 37 -107 -8z"/>
    </g>
    </svg>
    `

    return (
        <SvgXml xml={svg} {...props} />
    )
}

export default Agachar