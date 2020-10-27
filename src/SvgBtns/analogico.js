import * as React from "react"
import { SvgXml } from "react-native-svg"

function Analogico(props) {
    const svg = `<?xml version="1.0" standalone="no"?>
    <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
     "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
    <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
     width="512.000000pt" height="512.000000pt" viewBox="0 0 512.000000 512.000000"
     preserveAspectRatio="xMidYMid meet">
    
    <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
    fill="#000000" stroke="none">
    <path d="M2345 4620 c-177 -18 -253 -28 -271 -38 -26 -13 -108 -32 -142 -32
    -16 0 -37 -7 -48 -15 -10 -8 -26 -15 -35 -15 -9 0 -43 -12 -75 -26 -33 -14
    -72 -32 -89 -39 -16 -7 -51 -22 -77 -34 -26 -11 -51 -21 -54 -21 -3 0 -18 -8
    -32 -19 -28 -20 -85 -53 -139 -81 -17 -10 -38 -23 -46 -31 -9 -8 -39 -30 -67
    -49 -29 -19 -83 -64 -122 -100 -38 -36 -80 -71 -94 -78 -13 -7 -24 -17 -24
    -22 0 -5 -17 -26 -38 -47 -118 -117 -227 -254 -277 -347 -15 -27 -33 -55 -40
    -62 -18 -18 -145 -279 -145 -298 0 -8 -8 -30 -18 -48 -23 -41 -47 -120 -67
    -217 -8 -40 -18 -78 -22 -84 -21 -34 -36 -220 -37 -447 -1 -235 11 -379 36
    -458 8 -28 34 -137 54 -232 5 -23 22 -65 45 -112 5 -10 9 -23 9 -29 0 -19 147
    -305 174 -339 7 -8 17 -28 24 -43 6 -15 19 -30 27 -33 8 -4 15 -10 15 -15 0
    -14 62 -100 81 -112 11 -7 19 -17 19 -23 0 -21 225 -243 341 -336 59 -48 156
    -118 164 -118 3 0 25 -13 48 -28 23 -15 53 -33 67 -40 14 -6 32 -16 40 -21 31
    -20 169 -81 182 -81 8 0 18 -4 24 -8 5 -4 36 -18 69 -31 33 -12 69 -27 80 -31
    11 -5 36 -11 55 -15 86 -15 127 -24 160 -35 75 -25 194 -34 440 -34 263 0 408
    11 436 35 9 7 42 17 73 21 80 10 124 19 136 28 6 4 34 15 63 23 29 9 65 22 80
    30 15 8 59 29 97 47 91 41 203 98 237 122 14 10 30 18 35 18 6 0 18 10 29 21
    10 12 35 32 54 45 81 54 126 87 135 99 6 7 29 29 52 48 40 33 246 257 289 314
    81 107 149 218 213 348 41 83 77 159 81 170 4 11 15 38 23 60 26 67 39 114 35
    133 -2 10 2 25 9 33 6 8 14 35 17 61 3 25 10 59 16 73 6 15 10 42 8 59 -1 17
    5 42 12 56 10 18 15 86 18 255 5 237 -9 405 -43 515 -7 25 -13 61 -14 80 0 19
    -6 39 -13 45 -7 5 -12 20 -10 32 2 12 -3 32 -11 45 -8 13 -20 44 -27 71 -7 26
    -17 50 -21 53 -5 3 -9 18 -9 33 0 16 -8 39 -18 52 -10 13 -24 38 -31 54 -7 17
    -18 39 -23 49 -66 126 -92 174 -104 187 -8 8 -14 19 -14 23 0 5 -18 31 -40 60
    -22 28 -46 60 -54 71 -81 108 -321 355 -389 401 -23 16 -62 45 -87 64 -77 63
    -150 106 -290 173 -184 89 -226 107 -263 114 -18 3 -41 12 -52 20 -11 7 -29
    13 -42 13 -12 0 -25 5 -28 10 -3 6 -21 10 -38 10 -18 0 -63 6 -102 14 -38 8
    -99 20 -135 26 -81 15 -379 21 -485 10z m540 -53 c55 -9 125 -24 155 -33 86
    -25 231 -71 278 -88 74 -28 286 -137 322 -167 19 -16 39 -29 43 -29 14 0 189
    -134 222 -171 34 -38 36 -39 -101 66 -127 97 -213 151 -340 212 -217 103 -405
    164 -604 194 -130 20 -452 22 -597 5 -125 -16 -158 -23 -315 -65 -140 -37
    -372 -139 -496 -218 -56 -35 -62 -38 -62 -24 0 22 258 157 412 215 123 46 274
    84 453 114 96 16 512 8 630 -11z m-289 -265 c114 -60 134 -73 134 -87 0 -25
    -40 -17 -110 20 -35 19 -73 35 -83 35 -20 0 -143 -65 -153 -81 -9 -15 -41 -10
    -48 8 -4 9 -3 20 1 24 16 15 188 109 198 108 5 0 33 -12 61 -27z m-1231 -82
    c-4 -6 -25 -23 -48 -37 -96 -60 -247 -199 -411 -378 -52 -56 -45 -32 9 31 107
    125 270 276 384 356 54 37 78 48 66 28z m2735 -325 c13 -16 27 -32 30 -35 37
    -37 62 -70 49 -65 -18 7 -229 229 -229 241 0 9 115 -100 150 -141z m176 -221
    c125 -173 247 -432 301 -634 50 -191 69 -321 43 -305 -5 3 -10 27 -10 53 0 26
    -15 106 -34 177 -83 316 -171 498 -386 798 -13 18 -13 20 0 15 8 -2 47 -49 86
    -104z m-3498 -51 c-154 -231 -286 -565 -313 -794 -4 -30 -13 -92 -21 -138 -29
    -171 -9 -501 45 -741 18 -81 22 -115 13 -105 -10 12 -58 223 -72 325 -18 126
    -23 366 -10 470 7 52 16 127 20 165 21 197 134 512 268 745 45 79 122 183 129
    176 3 -3 -24 -49 -59 -103z m1958 -396 c95 -26 192 -70 241 -111 17 -14 35
    -26 40 -26 21 0 145 -142 187 -215 25 -44 46 -84 46 -90 0 -6 8 -26 19 -45 33
    -63 46 -140 45 -270 -1 -155 -18 -225 -89 -368 -44 -89 -66 -120 -131 -186
    -66 -66 -182 -156 -201 -156 -3 0 -33 -13 -67 -29 -164 -78 -400 -81 -568 -9
    -63 27 -62 41 0 18 233 -89 505 -56 707 85 117 82 179 154 241 279 71 145 84
    198 84 349 0 151 -15 218 -77 345 -41 82 -62 111 -138 187 -128 128 -235 186
    -405 221 -299 60 -618 -83 -786 -353 -53 -86 -77 -145 -98 -250 -62 -297 76
    -622 334 -789 46 -30 69 -50 59 -52 -49 -9 -259 178 -313 279 -68 130 -78 152
    -97 226 -15 60 -20 110 -20 216 1 137 11 197 48 267 7 14 13 30 13 37 0 22 91
    159 147 221 32 35 72 71 88 79 17 8 39 23 50 33 30 27 153 87 205 100 25 6 59
    15 75 20 17 4 84 8 151 9 96 1 138 -4 210 -22z m-16 -102 c93 -34 209 -99 245
    -136 20 -22 41 -39 46 -39 4 0 38 -45 75 -100 69 -105 94 -171 94 -250 l-1
    -45 -24 28 c-14 15 -25 38 -25 50 0 42 -12 65 -38 76 -39 16 -1081 20 -1075 5
    3 -7 -5 -10 -20 -7 -17 3 -28 -2 -40 -21 -10 -15 -13 -27 -7 -31 6 -3 10 -11
    10 -16 0 -6 -4 -8 -9 -4 -11 6 -51 -42 -51 -61 0 -8 -3 -14 -7 -14 -10 0 -9
    62 1 115 25 131 186 326 329 399 40 20 81 36 92 37 11 0 45 9 75 20 46 16 74
    18 170 15 72 -3 132 -11 160 -21z m1931 -669 c1 -115 -5 -239 -11 -275 -36
    -212 -70 -352 -78 -319 -2 10 6 56 18 104 38 150 49 267 50 514 1 168 4 228
    11 210 6 -14 10 -117 10 -234z m-1546 224 c4 -7 -182 -10 -549 -10 -364 0
    -556 3 -556 10 0 7 190 10 549 10 356 0 552 -4 556 -10z m1194 -29 c11 -15 25
    -39 31 -52 6 -13 22 -42 35 -64 32 -51 31 -63 -4 -134 -38 -74 -80 -126 -94
    -112 -14 14 -2 49 38 111 19 30 35 63 35 75 0 11 -18 47 -41 80 -22 33 -45 71
    -50 83 -19 48 18 58 50 13z m-3444 9 c7 -11 -10 -45 -59 -120 -20 -30 -36 -63
    -36 -73 0 -9 18 -46 40 -81 42 -66 50 -96 26 -96 -30 0 -132 156 -124 188 3 9
    30 56 62 105 52 81 76 101 91 77z m-321 -846 c8 -22 -4 -40 -15 -23 -11 18
    -11 39 0 39 5 0 12 -7 15 -16z m4026 -2 c0 -13 -12 -22 -22 -16 -10 6 -1 24
    13 24 5 0 9 -4 9 -8z m-3986 -136 c18 -52 125 -263 169 -334 15 -23 43 -67 63
    -97 19 -30 31 -55 27 -55 -7 0 -41 46 -105 144 -67 101 -188 361 -188 403 0
    18 20 -16 34 -61z m3946 37 c-32 -105 -129 -304 -203 -413 -84 -126 -121 -174
    -125 -162 -2 6 34 64 80 129 72 103 138 228 230 431 22 48 31 55 18 15z
    m-3615 -593 c10 -11 15 -23 12 -27 -8 -7 -47 25 -47 39 0 14 16 9 35 -12z
    m3197 -98 c-291 -322 -675 -551 -1087 -648 -209 -49 -534 -67 -725 -40 -197
    28 -278 46 -450 103 -152 51 -484 220 -452 231 7 2 18 0 25 -6 36 -29 285
    -154 362 -182 419 -153 782 -178 1245 -86 47 9 109 26 138 36 28 11 78 29 110
    41 89 32 357 166 404 202 24 18 61 44 83 58 72 47 185 147 298 264 61 63 113
    112 115 110 3 -2 -27 -40 -66 -83z m-3064 -52 c48 -50 129 -125 180 -167 50
    -42 92 -81 92 -87 0 -6 -7 -3 -14 7 -7 9 -16 17 -20 17 -21 0 -248 208 -308
    283 -51 64 -21 41 70 -53z m1410 -251 c89 -58 101 -58 186 -4 63 40 86 44 86
    15 0 -21 -78 -78 -146 -106 -31 -13 -38 -13 -76 7 -66 34 -158 100 -158 113 0
    15 10 26 22 26 4 0 43 -23 86 -51z m-1083 -37 c-6 -7 -35 18 -35 31 0 5 9 2
    20 -8 11 -10 18 -20 15 -23z"/>
    <path d="M2002 2758 c2 -6 215 -10 541 -11 354 -1 536 1 534 8 -2 6 -193 10
    -541 11 -332 1 -536 -2 -534 -8z"/>
    </g>
    </svg>
    `

    return (
        <SvgXml xml={svg} {...props} />
    )
}

export default Analogico