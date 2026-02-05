import { prisma } from "@/utils/prisma";

export async function productImageSeed() {
    await prisma.productImage.createMany({
        data: [
            {
                colorId: "cml9hws9c000008m67yb8h6uz",
                image_url: "https://res.cloudinary.com/dcvlgtx5a/image/upload/v1770274533/17116030626317222aeca830cfd19dde3a24854d17_thumbnail_900x_1_kkxzoz.jpg",
                is_thumbnail: true
            },
            {
                colorId: "cml9hws9c000008m67yb8h6uz",
                image_url: "https://res.cloudinary.com/dcvlgtx5a/image/upload/v1770274533/17116030593c09e6db635a594e07c2ee3815be0f43_thumbnail_900x_l7d7uv.jpg",
                is_thumbnail: false
            },
            {
                colorId: "cml9hws9c000008m67yb8h6uz",
                image_url: "https://res.cloudinary.com/dcvlgtx5a/image/upload/v1770274533/1713517308a5db9b404c8724ff2c84f2634c2cd975_thumbnail_900x_pgcilr.jpg",
                is_thumbnail: false
            },
            {
                colorId: "cml9hws9c000008m67yb8h6uz",
                image_url: "https://res.cloudinary.com/dcvlgtx5a/image/upload/v1770274533/1711603068a95aef7f5354a3c8abee8f30e1d94677_thumbnail_900x_m0k0ot.jpg",
                is_thumbnail: false
            },
            {
                colorId: "cml9hws9c000008m67yb8h6uz",
                image_url: "https://res.cloudinary.com/dcvlgtx5a/image/upload/v1770274533/1711603071e1ac27d922e14af6343e1ed7aef428cb_thumbnail_900x_bheh1b.jpg",
                is_thumbnail: false
            },
            {
                colorId: "cml9hws9c000108m67ue4rn5j",
                image_url: "https://res.cloudinary.com/dcvlgtx5a/image/upload/v1770280790/1755226200d71fa6b5260caf52e787f01ca27858d9_thumbnail_220x293_yj7cei.jpg",
                is_thumbnail: true
            },
            {
                colorId: "cml9hws9c000108m67ue4rn5j",
                image_url: "https://res.cloudinary.com/dcvlgtx5a/image/upload/v1770280790/1755226198d463e8c78cf9595e148b3fe224a84d2f_thumbnail_220x293_oahbvr.jpg",
                is_thumbnail: false
            },
            {
                colorId: "cml9hws9c000108m67ue4rn5j",
                image_url: "https://res.cloudinary.com/dcvlgtx5a/image/upload/v1770280791/1755226203fdfd4ebbf6c976855d1641a2aa4e98dc_thumbnail_220x293_apvk6u.jpg",
                is_thumbnail: false
            },
            {
                colorId: "cml9hws9c000108m67ue4rn5j",
                image_url: "https://res.cloudinary.com/dcvlgtx5a/image/upload/v1770280793/1755226201607a6ff9cc0ad6617fab56b9de9d6a00_thumbnail_220x293_wyx9ox.jpg",
                is_thumbnail: false
            },
            {
                colorId: "cml9hws9c000208m6t78l3b30",
                image_url: "https://res.cloudinary.com/dcvlgtx5a/image/upload/v1770299472/1755226260697937d40585afb56834143ff0c9099c_thumbnail_220x293_sshrur.jpg",
                is_thumbnail: true
            },
            {
                colorId: "cml9hws9c000208m6t78l3b30",
                image_url: "https://res.cloudinary.com/dcvlgtx5a/image/upload/v1770299475/175522625801824631001ad71015e0313d01bcab21_thumbnail_220x293_jz1wca.jpg",
                is_thumbnail: false
            },
            {
                colorId: "cml9hws9c000208m6t78l3b30",
                image_url: "https://res.cloudinary.com/dcvlgtx5a/image/upload/v1770299467/17552262579baf57cc847d7578f5e70ce572cf210b_thumbnail_900x_fxwn1x.jpg",
                is_thumbnail: false
            },
            {
                colorId: "cml9hws9c000208m6t78l3b30",
                image_url: "https://res.cloudinary.com/dcvlgtx5a/image/upload/v1770299469/17552262638ba80967897bef82d7048518ceb362f2_thumbnail_220x293_fmw5k1.jpg",
                is_thumbnail: false
            },
            {
                colorId: "cml9hws9c000208m6t78l3b30",
                image_url: "https://res.cloudinary.com/dcvlgtx5a/image/upload/v1770299471/17552262652bcb05b6af0221ef5171a2d2ee178ff8_thumbnail_220x293_ilix45.jpg",
                is_thumbnail: false
            },
            {
                colorId: "cml9hws9c000308m682xh3bg8",
                image_url: "https://res.cloudinary.com/dcvlgtx5a/image/upload/v1770279915/17157587725a564a4e8934ed591ddab1c5821a6ca7_thumbnail_900x_ttcmvv.jpg",
                is_thumbnail: true
            },
            {
                colorId: "cml9hws9c000308m682xh3bg8",
                image_url: "https://res.cloudinary.com/dcvlgtx5a/image/upload/v1770279916/171575875155b3158cc90c00cc4229a38c250775bc_thumbnail_900x_rk75pj.jpg",
                is_thumbnail: false
            },
            {
                colorId: "cml9hws9c000308m682xh3bg8",
                image_url: "https://res.cloudinary.com/dcvlgtx5a/image/upload/v1770279917/171575876372c7149f21ebfce5874a194b4ee18faa_thumbnail_220x293_stq2zv.jpg",
                is_thumbnail: false
            },
            {
                colorId: "cml9hws9c000308m682xh3bg8",
                image_url: "https://res.cloudinary.com/dcvlgtx5a/image/upload/v1770280789/1715758755f6f3b8f0e85421aa32c4585f3bb1b415_thumbnail_220x293_cqflhb.jpg",
                is_thumbnail: false
            },
            {
                colorId: "cml9hws9c000408m6kqrjuqi7",
                image_url: "https://res.cloudinary.com/dcvlgtx5a/image/upload/v1770293323/1728650491c52e6c315b54947016afdb2907fab27a_thumbnail_900x_ojcda9.jpg",
                is_thumbnail: true
            },
            {
                colorId: "cml9hws9c000408m6kqrjuqi7",
                image_url: "https://res.cloudinary.com/dcvlgtx5a/image/upload/v1770293322/1711331195d726a75f6fa4c3b5a4c4ee2b5e32c67e_thumbnail_220x293_str0dw.jpg",
                is_thumbnail: false
            },
            {
                colorId: "cml9hws9c000408m6kqrjuqi7",
                image_url: "https://res.cloudinary.com/dcvlgtx5a/image/upload/v1770293323/1711331199ceb07d93ef3685d35d5a68c0579d9b77_thumbnail_220x293_uygps1.jpg",
                is_thumbnail: false
            },
            {
                colorId: "cml9hws9c000508m6zohgoa1x",
                image_url: "https://res.cloudinary.com/dcvlgtx5a/image/upload/v1770293343/174520289116682b03c52d2aa6ae0ecec3746fdbff_thumbnail_900x_dvizhs.jpg",
                is_thumbnail: true
            },
            {
                colorId: "cml9hws9c000508m6zohgoa1x",
                image_url: "https://res.cloudinary.com/dcvlgtx5a/image/upload/v1770293335/174520289500a5bfef963254a6375732f4e8a072e8_thumbnail_220x293_qednlx.jpg",
                is_thumbnail: false
            },
            {
                colorId: "cml9hws9c000508m6zohgoa1x",
                image_url: "https://res.cloudinary.com/dcvlgtx5a/image/upload/v1770293331/17452028998e80e2a4f77d17fdbc31aa23f2f7fbf0_thumbnail_220x293_bd1ush.jpg",
                is_thumbnail: false
            },
            {
                colorId: "cml9hws9c000608m67bdqpb5l",
                image_url: "https://res.cloudinary.com/dcvlgtx5a/image/upload/v1770293339/1745236813753a1b0a41a0cae0b092407f1f4b1bce_thumbnail_900x_oqwoow.jpg",
                is_thumbnail: true
            },
            {
                colorId: "cml9hws9c000608m67bdqpb5l",
                image_url: "https://res.cloudinary.com/dcvlgtx5a/image/upload/v1770293326/1745236817e8a2c73ff6c1a529e3aa1c8690909b37_thumbnail_220x293_vcj5hg.jpg",
                is_thumbnail: false
            },
            {
                colorId: "cml9hws9c000608m67bdqpb5l",
                image_url: "https://res.cloudinary.com/dcvlgtx5a/image/upload/v1770293327/1745236818c955498aad3b084073fb888e4ddcb20f_thumbnail_220x293_up5ddf.jpg",
                is_thumbnail: false
            },
            {
                colorId: "cml9hws9c000608m67bdqpb5l",
                image_url: "https://res.cloudinary.com/dcvlgtx5a/image/upload/v1770293328/1745236820abdfbf5a3a1dabec77f14ed86c655bf8_thumbnail_220x293_tyo6gc.jpg",
                is_thumbnail: false
            },
            {
                colorId: "cml9hws9c000708m6tu8t2lz2",
                image_url: "https://res.cloudinary.com/dcvlgtx5a/image/upload/v1770293332/172865048847c0b2bcfade7965b71a6c2665027cfa_thumbnail_900x_cf7z7d.jpg",
                is_thumbnail: true
            },
            {
                colorId: "cml9hws9c000708m6tu8t2lz2",
                image_url: "https://res.cloudinary.com/dcvlgtx5a/image/upload/v1770293322/1712900479ad72b5f27bd783c4fa0b9799cb7e4ebc_thumbnail_220x293_mony7i.jpg",
                is_thumbnail: false
            },
            {
                colorId: "cml9hws9c000708m6tu8t2lz2",
                image_url: "https://res.cloudinary.com/dcvlgtx5a/image/upload/v1770293347/17129004808185776aa356a34001df46274a4e388d_thumbnail_220x293_xwogbk.jpg",
                is_thumbnail: false
            },
            {
                colorId: "cml9hws9c000808m6ngqny1q5",
                image_url: "https://res.cloudinary.com/dcvlgtx5a/image/upload/v1770293329/1747710503a8675209075790445ba0f4788501a89d_thumbnail_900x_ztiyyl.jpg",
                is_thumbnail: true
            },
            {
                colorId: "cml9hws9c000808m6ngqny1q5",
                image_url: "https://res.cloudinary.com/dcvlgtx5a/image/upload/v1770293335/174771050620f488fa47b9a00b99e7e08ae8e898d6_thumbnail_220x293_rxcfxr.jpg",
                is_thumbnail: false
            },
            {
                colorId: "cml9hws9c000808m6ngqny1q5",
                image_url: "https://res.cloudinary.com/dcvlgtx5a/image/upload/v1770293344/1747710508566224fbe470f08a4c9fcc90604f2fb0_thumbnail_220x293_lbm6ii.jpg",
                is_thumbnail: false
            },
            {
                colorId: "cml9hws9c000808m6ngqny1q5",
                image_url: "https://res.cloudinary.com/dcvlgtx5a/image/upload/v1770293349/174771051013552897880734614537d5b72e80c68a_thumbnail_220x293_zypevr.jpg",
                is_thumbnail: false
            },
            {
                colorId: "cml9hws9d000908m6pyw1b12e",
                image_url: "https://res.cloudinary.com/dcvlgtx5a/image/upload/v1770294496/1766154525de7d33823711dbc59d52e2228a82c3c0_thumbnail_220x293_kk3pkf.jpg",
                is_thumbnail: true
            },
            {
                colorId: "cml9hws9d000908m6pyw1b12e",
                image_url: "https://res.cloudinary.com/dcvlgtx5a/image/upload/v1770294495/1766154522e76c68f57ae661131b081f48a23f0ae0_thumbnail_900x_o7niey.jpg",
                is_thumbnail: false
            },
            {
                colorId: "cml9hws9d000908m6pyw1b12e",
                image_url: "https://res.cloudinary.com/dcvlgtx5a/image/upload/v1770294495/1766154523ae7d0b86734645c1656e3e2e13f74c65_thumbnail_220x293_rzknhi.jpg",
                is_thumbnail: false
            },
            {
                colorId: "cml9hws9d000908m6pyw1b12e",
                image_url: "https://res.cloudinary.com/dcvlgtx5a/image/upload/v1770294496/1766154526fbbe98ae8de020e2ce5092f59c63ece8_thumbnail_220x293_kkolvu.jpg",
                is_thumbnail: false
            },
            {
                colorId: "cml9hws9d000908m6pyw1b12e",
                image_url: "https://res.cloudinary.com/dcvlgtx5a/image/upload/v1770294498/1766154528c6d4172319a5688f32103a9298c86d9a_thumbnail_220x293_uo5dsc.jpg",
                is_thumbnail: false
            },
            {
                colorId: "cml9hws9d000a08m6tza0pci7",
                image_url: "https://res.cloudinary.com/dcvlgtx5a/image/upload/v1770294505/1766715819d61e739a7a418b33fc144bc6f7255c72_thumbnail_220x293_zjrug7.jpg",
                is_thumbnail: true
            },
            {
                colorId: "cml9hws9d000a08m6tza0pci7",
                image_url: "https://res.cloudinary.com/dcvlgtx5a/image/upload/v1770294501/1766715812e4ea97aa628fe334e4d44b5a2fd0966a_thumbnail_900x_q76bhn.jpg",
                is_thumbnail: false
            },
            {
                colorId: "cml9hws9d000a08m6tza0pci7",
                image_url: "https://res.cloudinary.com/dcvlgtx5a/image/upload/v1770294502/1766715816a154897c83ce7d3c612a128af2a35c6c_thumbnail_220x293_eiydn2.jpg",
                is_thumbnail: false
            },
            {
                colorId: "cml9hws9d000a08m6tza0pci7",
                image_url: "https://res.cloudinary.com/dcvlgtx5a/image/upload/v1770294501/1766715814fa5d4e6e3b845d4ef2a5c95470d88ec2_thumbnail_220x293_zfxu3o.jpg",
                is_thumbnail: false
            },
            {
                colorId: "cml9hws9d000a08m6tza0pci7",
                image_url: "https://res.cloudinary.com/dcvlgtx5a/image/upload/v1770294504/1766715818c004fad944c6c46bfc8910f1145f4d28_thumbnail_220x293_iu8kap.jpg",
                is_thumbnail: false
            },
            {
                colorId: "cml9hws9d000b08m6ukmxuhv8",
                image_url: "https://res.cloudinary.com/dcvlgtx5a/image/upload/v1770294510/175922421869e7ce1099d7c6aea6194e7407ae54ea_thumbnail_220x293_zakrko.jpg",
                is_thumbnail: true
            },
            {
                colorId: "cml9hws9d000b08m6ukmxuhv8",
                image_url: "https://res.cloudinary.com/dcvlgtx5a/image/upload/v1770294506/17592242145eb850d88bccc5e3fdccc9f3cc8a85c0_thumbnail_900x_duwttg.jpg",
                is_thumbnail: false
            },
            {
                colorId: "cml9hws9d000b08m6ukmxuhv8",
                image_url: "https://res.cloudinary.com/dcvlgtx5a/image/upload/v1770294509/17592242164e80664ec729ce317bb6adb8f1533ad9_thumbnail_220x293_aaalie.jpg",
                is_thumbnail: false
            },
            {
                colorId: "cml9hws9d000b08m6ukmxuhv8",
                image_url: "https://res.cloudinary.com/dcvlgtx5a/image/upload/v1770294510/17592242207c7b423bd51e93269abf2cf05c3d6f70_thumbnail_220x293_q7eiif.jpg",
                is_thumbnail: false
            },
            {
                colorId: "cml9hws9d000b08m6ukmxuhv8",
                image_url: "https://res.cloudinary.com/dcvlgtx5a/image/upload/v1770294513/175922422140d848cdbd991815c4965564b7dab55a_thumbnail_220x293_ow6n0w.jpg",
                is_thumbnail: false
            },
            {
                colorId: "cml9hws9d000c08m642h1zk8l",
                image_url: "https://res.cloudinary.com/dcvlgtx5a/image/upload/v1770294788/1740378711e65cd2be1f96ddbc8da545e3c7a1eed3_thumbnail_220x293_gx2vhc.webp",
                is_thumbnail: true
            },
            {
                colorId: "cml9hws9d000c08m642h1zk8l",
                image_url: "https://res.cloudinary.com/dcvlgtx5a/image/upload/v1770294782/1740378692dbd9e6994d91cc43d18403ada1edf429_thumbnail_220x293_v0vzmz.jpg",
                is_thumbnail: false
            },
            {
                colorId: "cml9hws9d000c08m642h1zk8l",
                image_url: "https://res.cloudinary.com/dcvlgtx5a/image/upload/v1770294783/1740378692f33ff7d930a8825c9dd31a46d9f646a7_thumbnail_220x293_bwejwk.jpg",
                is_thumbnail: false
            },
            {
                colorId: "cml9hws9d000c08m642h1zk8l",
                image_url: "https://res.cloudinary.com/dcvlgtx5a/image/upload/v1770294784/1740378693f43ff41759dfc94e30cf7db196645b7a_thumbnail_220x293_ydxzyx.jpg",
                is_thumbnail: false
            },
            {
                colorId: "cml9hws9d000c08m642h1zk8l",
                image_url: "https://res.cloudinary.com/dcvlgtx5a/image/upload/v1770294794/17496371632334a7e8b6b1887d24ccf0bac4a4c29a_thumbnail_220x293_svtnpa.jpg",
                is_thumbnail: false
            },
            {
                colorId: "cml9hws9d000d08m6j36xh3jx",
                image_url: "https://res.cloudinary.com/dcvlgtx5a/image/upload/v1770294798/1730512420311443cc7b5fbcea4f73dc77c2847f9d_thumbnail_900x_a59j4z.jpg",
                is_thumbnail: true
            },
            {
                colorId: "cml9hws9d000d08m6j36xh3jx",
                image_url: "https://res.cloudinary.com/dcvlgtx5a/image/upload/v1770294789/17312957048d1e87f1cc975ddfb12f6c55313ac5b9_thumbnail_220x293_dchdd3.jpg",
                is_thumbnail: false
            },
            {
                colorId: "cml9hws9d000d08m6j36xh3jx",
                image_url: "https://res.cloudinary.com/dcvlgtx5a/image/upload/v1770294791/1730512420679f84545a4f489979222ed3bd7930d1_thumbnail_220x293_drdhjl.jpg",
                is_thumbnail: false
            },
            {
                colorId: "cml9hws9d000d08m6j36xh3jx",
                image_url: "https://res.cloudinary.com/dcvlgtx5a/image/upload/v1770294800/17312957045995873eef4904cdb0dc26567687305a_thumbnail_220x293_iaye2w.jpg",
                is_thumbnail: false
            },
            {
                colorId: "cml9hws9d000d08m6j36xh3jx",
                image_url: "https://res.cloudinary.com/dcvlgtx5a/image/upload/v1770294792/1731295704855c72d9d7913edb1598a9d2cd30fc49_thumbnail_220x293_phuchg.jpg",
                is_thumbnail: false
            },
            {
                colorId: "cml9hws9d000e08m6wbl9zpbp",
                image_url: "https://res.cloudinary.com/dcvlgtx5a/image/upload/v1770295618/1761223016c1bd1bf394d3203d8e039a0bcf03cb70_thumbnail_220x293_oksbsu.jpg",
                is_thumbnail: true
            },
            {
                colorId: "cml9hws9d000e08m6wbl9zpbp",
                image_url: "https://res.cloudinary.com/dcvlgtx5a/image/upload/v1770295619/1761223020a11f03e0b860576ceac8c49a405732f2_thumbnail_220x293_dxddeq.jpg",
                is_thumbnail: false
            },
            {
                colorId: "cml9hws9d000e08m6wbl9zpbp",
                image_url: "https://res.cloudinary.com/dcvlgtx5a/image/upload/v1770295620/1768468064d50fdb7373bd592352146559b4510160_thumbnail_220x293_nl16df.jpg",
                is_thumbnail: false
            },
            {
                colorId: "cml9hws9d000e08m6wbl9zpbp",
                image_url: "https://res.cloudinary.com/dcvlgtx5a/image/upload/v1770295630/17668427993b7fbd98ec3e78954bc2902481109529_thumbnail_900x_xdgsmy.jpg",
                is_thumbnail: false
            },
            {
                colorId: "cml9hws9d000e08m6wbl9zpbp",
                image_url: "https://res.cloudinary.com/dcvlgtx5a/image/upload/v1770295629/17612230808d3838ddeb68b6b429ccec5f689875be_thumbnail_220x293_dtftj3.jpg",
                is_thumbnail: false
            },
            {
                colorId: "cml9hws9d000e08m6wbl9zpbp",
                image_url: "https://res.cloudinary.com/dcvlgtx5a/image/upload/v1770295647/176122308065655fb5d4ae89c7b9f3c3d6cba67d60_thumbnail_220x293_z4jkeu.jpg",
                is_thumbnail: false
            },
            {
                colorId: "cml9hws9d000f08m6fcrxm15t",
                image_url: "https://res.cloudinary.com/dcvlgtx5a/image/upload/v1770295632/175596118559d0b6c8d4612ad31168ba87a54c2f48_thumbnail_220x293_mgo8cg.jpg",
                is_thumbnail: true
            },
            {
                colorId: "cml9hws9d000f08m6fcrxm15t",
                image_url: "https://res.cloudinary.com/dcvlgtx5a/image/upload/v1770295633/175596118596a9b12cce81a75ea6bfa82374c441cd_thumbnail_220x293_d7qwv5.jpg",
                is_thumbnail: false
            },
            {
                colorId: "cml9hws9d000f08m6fcrxm15t",
                image_url: "https://res.cloudinary.com/dcvlgtx5a/image/upload/v1770295640/176270507692b76220c9d3a3582aaf0f225a5c19d0_thumbnail_220x293_jfkf1m.jpg",
                is_thumbnail: false
            },
            {
                colorId: "cml9hws9d000f08m6fcrxm15t",
                image_url: "https://res.cloudinary.com/dcvlgtx5a/image/upload/v1770295641/1755960590483d124c0155b1ea6772829b3724effc_thumbnail_220x293_wkd5h8.jpg",
                is_thumbnail: false
            },
            {
                colorId: "cml9hws9d000g08m6ofnmsptr",
                image_url: "https://res.cloudinary.com/dcvlgtx5a/image/upload/v1770298180/1764569563c4cf863945d4fa6aa22426cec465d3b2_thumbnail_900x_audjh4.jpg",
                is_thumbnail: true
            },
            {
                colorId: "cml9hws9d000g08m6ofnmsptr",
                image_url: "https://res.cloudinary.com/dcvlgtx5a/image/upload/v1770298180/1764569565f281f94f75c6688aff57c3a2679ab78c_thumbnail_900x_ob3wzc.jpg",
                is_thumbnail: false
            },
            {
                colorId: "cml9hws9d000g08m6ofnmsptr",
                image_url: "https://res.cloudinary.com/dcvlgtx5a/image/upload/v1770298180/1764569567aa656559941804f1d15cbb424dbcce7b_thumbnail_220x293_oc6h1e.jpg",
                is_thumbnail: false
            },
            {
                colorId: "cml9hws9d000g08m6ofnmsptr",
                image_url: "https://res.cloudinary.com/dcvlgtx5a/image/upload/v1770298182/17645695714f34b8487e1647b94eaaa8c646036a60_thumbnail_220x293_c8mzrc.webp",
                is_thumbnail: false
            },
            {
                colorId: "cml9hws9d000g08m6ofnmsptr",
                image_url: "https://res.cloudinary.com/dcvlgtx5a/image/upload/v1770298182/1764569567aa656559941804f1d15cbb424dbcce7b_thumbnail_900x_eclf5u.jpg",
                is_thumbnail: false
            },
            {
                colorId: "cml9hws9d000g08m6ofnmsptr",
                image_url: "https://res.cloudinary.com/dcvlgtx5a/image/upload/v1770298184/17645695697855a9aa27e680f5a2cbea54b23f1bc1_thumbnail_220x293_kqljwl.jpg",
                is_thumbnail: false
            },
        ],
        skipDuplicates: true
    })
}