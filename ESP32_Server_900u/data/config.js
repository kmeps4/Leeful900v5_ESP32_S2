/* Copyright (C) 2023 anonymous

This file is part of PSFree.

PSFree is free software: you can redistribute it and/or modify
it under the terms of the GNU Affero General Public License as
published by the Free Software Foundation, either version 3 of the
License, or (at your option) any later version.

PSFree is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU Affero General Public License for more details.

You should have received a copy of the GNU Affero General Public License
along with this program.  If not, see <https://www.gnu.org/licenses/>.  */

// webkitgtk 2.34.4 was used to develop the portable parts of the exploit
// before moving on to ps4 8.03
//
// webkitgtk 2.34.4 was built with cmake variable ENABLE_JIT=OFF, that variable
// can affect the size of SerializedScriptValue
//
// this target is no longer supported
//
//export const gtk_2_34_4 = 0;

// the original target platform was 8.03, this version confirmed works on ps4
// 7.xx-8.xx
export const ps4_8_03 = 1;

// this version for 9.xx
export const ps4_9_00 = 2;

// version 9.xx is for ps5 1.xx-5.xx as well
export const ps5_5_00 = ps4_9_00;

// this version for 6.50-6.72
export const ps4_6_50 = 3;

// this version for 6.00-6.20
export const ps4_6_00 = 4;

export function set_target(value) {
    switch (value) {
        case ps4_8_03:
        case ps4_9_00:
        case ps4_6_00:
        case ps4_6_50: {
            break;
        }
        default: {
            throw RangeError('invalid target: ' + target);
        }
    }

    target = value;
}

export let target = ps4_9_00;
