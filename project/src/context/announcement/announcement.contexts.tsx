import { AxiosError } from "axios";
import jwt_decode, { JwtPayload } from "jwt-decode";
import { createContext, useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
  AnnouncementRequest,
  AnnouncementResponse,
  UpdateAnnouncementRequest
} from "../../interfaces/announcement.interface";
import {
  AnnouncementProviderData,
  Props
} from "../../interfaces/contexts.interface";
import { api } from "../../util/api";
import { getToken, logout } from "../session/auth";
import { UserContext } from "../user/userContext";

const Context = createContext<AnnouncementProviderData>(
  {} as AnnouncementProviderData
);

export const AnnouncementProvider = ({ children }: Props) => {
  const [detailAnoucements, setDetailAnoucements] = useState(
    {} as AnnouncementResponse
  );
  const [isOpenModalCreateAnnouncement, setIsOpenModalCreateAnnouncement] =
    useState<boolean>(false);
  const [isOpenModalUpdateAnnouncement, setIsOpenModalUpdateAnnouncement] =
    useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [announcementType, setAnnouncementType] = useState<string>("");
  const [vehicleType, setVehicleType] = useState<string>("car");
  const [allAnnouncementByAdvertiser, setAllAnnouncementByAdvertiser] =
    useState<AnnouncementResponse[]>([]);
  const [allAnnouncementByAdvertiserAdmin, setAllAnnouncementByAdvertiserAdmin] =
    useState<AnnouncementResponse[]>([]);
  const [allAnnouncements, setAllAnnouncements] = useState<
    AnnouncementResponse[]
  >([]);
  const [isAnnouncementPublished, setIsAnnouncementPublished] =
    useState<boolean>(true);
  const [isOpenModalDeleteAnnouncement, setIsOpenModalDeleteAnnouncement] =
    useState<boolean>(false);
  const [isModalSuccessCreate, setIsModalSuccessCreate] = useState<boolean>(false)

  const { setUserAdvertiser, getUser, user, reload, setReload, userAdvertiser } = UserContext();

  const navigate = useNavigate();

  const { pathname } = useLocation()

  const createAnnouncement = async (data: AnnouncementRequest) => {
    setIsLoading(true);

    try {
      const response = await api.post(`/announcements/`, {
        ...data,
        type: announcementType,
        vehicle: {
          type: vehicleType,
          price: data.price,
          year: data.year,
          mileage: data.mileage,
          coverImage: data.coverImage,
          galleryImages: data.galleryImages,
        },
      });

        setIsOpenModalCreateAnnouncement(!isOpenModalCreateAnnouncement)
        setIsLoading(false);
        setIsModalSuccessCreate(!isModalSuccessCreate)
        setReload(!reload);

    } catch (error) {
      if (error instanceof AxiosError) {
        setIsLoading(false);
        console.log(error);

        error.response?.status === 500 &&
          setTimeout(() => {

            logout();
            navigate('/error', { replace: true });
          }, 5000);
      }
    }
  };
  const updateAnnouncement = async (data: UpdateAnnouncementRequest) => {
    setIsLoading(true);

    try {
      
      const response = await api.put(
        `/announcements/${detailAnoucements.id}`,
        {
          ...data,
          type: announcementType,
          published: isAnnouncementPublished,
          vehicle: {
            type: vehicleType,
            price: data.price,
            year: data.year,
            mileage: data.mileage,
            coverImage: data.coverImage,
            galleryImages: data.galleryImages,
          },
        }
      );

      toast.update("Anúncio atualizado", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });

      setTimeout(() => {
        setReload(!reload);
        setIsOpenModalUpdateAnnouncement(!isOpenModalUpdateAnnouncement)
        setIsLoading(false);
        
      }, 500);

    } catch (error) {
      if (error instanceof AxiosError) {
        setIsLoading(false);
        error.response?.status === 500 &&
          setTimeout(() => {

            logout();
            navigate('/error', { replace: true });
          }, 5000);
      }
    }
  };

  const getAnnouncements = async () => {
    try {
      const announcementID = localStorage.getItem("announcementID");

      const advertiserID = localStorage.getItem("advertiserID");

      let decoded: JwtPayload = {
        exp: 1,
        iat: 1,
        sub: "error",
      };

      const token = getToken();

      const response = await api.get("/announcements/");

      setAllAnnouncements(response.data);

      if (announcementID) {
        const responseDetail = response.data.find(
          (elem: AnnouncementResponse) => {
            return elem.id === announcementID;
          }
        );
        setDetailAnoucements(responseDetail);
      }

      if (advertiserID) {
        if (token) {
          decoded = jwt_decode(token!);
        }

        if (decoded.sub?.length! > 5) {

          if (pathname === '/profile/admin') {

            return getAllAnnouncementByAdvertiser(decoded.sub!)
          }
        }

        if (pathname === '/profile/') {

          getAllAnnouncementByAdvertiser(advertiserID)
        }
        getAllAnnouncementByAdvertiser(advertiserID)

      }
    } catch (error) {
      if (error instanceof AxiosError) {
        console.log(error);
      }
    }
  };

  const deleteAnnouncement = async (announcementId: string) => {
    try {
      setIsLoading(true);

      await api.delete(`/announcements/${announcementId}`);
      toast.success("Anúncio deletado", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      
      setTimeout(() => {
        setIsLoading(false);
        setReload(!reload);

      }, 500);

    } catch (error) {
      if (error instanceof AxiosError) {
        setIsLoading(false);
        error.response?.status === 500 && setTimeout(() => {
          logout()
          navigate('/error', { replace: true });

        }, 5000);
      }
    }
  };

  const createComment = async (data: any) => {
    try {
      setIsLoading(true);
      const response = await api.post(`/announcements/${detailAnoucements?.id}/comments/`, {
        ...data
      });

      setTimeout(() => {
        setIsLoading(false);
        setReload(!reload);

      }, 500);

    } catch (error) {
      if (error instanceof AxiosError) {
        console.log(error);

      }
    }
  }

  const getAllAnnouncementByAdvertiser = async (advertiserId: string) => {
    try {

      const response = await api.get("/announcements/");

      const allAnnouncementByAdvertiserId = response.data.filter(
        (element: AnnouncementResponse) => {
          return element.advertiser.id === advertiserId;
        }
      );

      if (pathname === '/profile/admin') {

        if (allAnnouncementByAdvertiserId) {
  
          const advertiser = allAnnouncementByAdvertiserId.find((elem: AnnouncementResponse) => {
            return elem?.advertiser.id === advertiserId
          })?.advertiser
  
          advertiser && setUserAdvertiser(advertiser)
        }

        return setAllAnnouncementByAdvertiserAdmin(allAnnouncementByAdvertiserId)
      }
      if (pathname === '/profile/') {
      
        setAllAnnouncementByAdvertiser(allAnnouncementByAdvertiserId);
        if (allAnnouncementByAdvertiserId) {
  
          const advertiser = allAnnouncementByAdvertiserId.find((elem: AnnouncementResponse) => {
            return elem?.advertiser.id === advertiserId
          })?.advertiser
  
          advertiser && setUserAdvertiser(advertiser)
        }
      }

      return allAnnouncementByAdvertiserId;

    } catch (error) { }
  };


  useEffect(() => {

    let decoded: JwtPayload = {
      exp: 1,
      iat: 1,
      sub: "error",
    };

    const token = getToken();

    if (token) {
      decoded = jwt_decode(token!);
    }

    if (decoded.sub?.length! > 5) {

      getUser(decoded.sub!);

    }

    getAnnouncements();

  }, [, reload])

  return (
    <Context.Provider value={{
      createAnnouncement,
      setIsOpenModalCreateAnnouncement,
      isOpenModalCreateAnnouncement,
      announcementType,
      setAnnouncementType,
      setVehicleType,
      vehicleType,
      setIsAnnouncementPublished,
      isAnnouncementPublished,
      detailAnoucements,
      setDetailAnoucements,
      getAllAnnouncementByAdvertiser,
      allAnnouncementByAdvertiser,
      isOpenModalUpdateAnnouncement,
      setIsOpenModalUpdateAnnouncement,
      updateAnnouncement,
      deleteAnnouncement,
      isOpenModalDeleteAnnouncement,
      setIsOpenModalDeleteAnnouncement,
      allAnnouncements,
      reload,
      setReload,
      isModalSuccessCreate,
      setIsModalSuccessCreate,
      createComment,
      allAnnouncementByAdvertiserAdmin,
      setAllAnnouncementByAdvertiserAdmin,
    }}>
      {children}
    </Context.Provider>
  );
};

export const AnnouncementContext = () => useContext(Context);
