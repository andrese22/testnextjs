'use client';

import React, { useCallback, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import cx from 'classnames';

import api from '@/api/pressReleases';
import ButtonContainer from '@/containers/ButtonContainer';
import enums from '@/consts/enums';
import helpers from '@/utils/helpers';

const pageSizeIncrement = 8;
const currentDate = new Date();

function PressReleasesPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);
  const [payload, setPayload] = useState({
    startDate: helpers.formatInputDate(
      new Date(new Date().setMonth(currentDate.getMonth() - 6)),
    ),
    endDate: helpers.formatInputDate(currentDate),
    pageSize: pageSizeIncrement,
    pageIndex: 1,
    SearchTerm: '',
  });

  const getData = useCallback(async () => {
    try {
      const newData = await api.getPressReleases(payload);

      if (
        (newData.data.Releases || []).length === 0
        || (newData.data.Releases || []).length === (data?.Releases ?? []).length
      ) {
        throw 'No more data found';
      }

      setData(newData.data);
    } catch (err) {
      throw new Error(`An error has occurred: ${err}`);
    } finally {
      setIsLoading(false);
    }
  }, [payload]);

  useEffect(() => {
    setIsLoading(true);

    getData();
  }, [getData]);

  const handleLoadMore = useCallback(() => {
    setPayload((oldPayload) => ({
      ...oldPayload,
      pageSize: oldPayload.pageSize + pageSizeIncrement,
    }));
  }, []);

  const handleFormChange = useCallback((e) => {
    e.preventDefault();

    const prop = e.target.id;
    const value = e.target.value;

    if (prop !== enums.formInputsEnum.searchTerm) {
      setPayload((oldPayload) => ({
        ...oldPayload,
        [prop]: value,
      }));
    }
  }, []);

  const handleFormBlur = useCallback((e) => {
    e.preventDefault();

    const prop = e.target.id;
    const value = e.target.value;

    if (prop === enums.formInputsEnum.searchTerm) {
      setPayload((oldPayload) => ({
        ...oldPayload,
        [prop]: value,
      }));
    }
  }, []);

  const handleImgClick = useCallback((e) => {
    e.preventDefault();

    const [index] = e.target.id.split('.');

    router.push(`pressReleases/${index}`);
  }, []);

  const pageClassname = cx('page', {
    'page--loading': isLoading,
  });

  return (
    <article className={pageClassname}>
      <section className="page-dashboard">
        <h1 className="page-dashboard__h1">Press releases</h1>
        <h2>{`Title - ${data?.Title ?? 'No data'}`}</h2>
        <h4>{`Date - ${new Date(data?.DatePackaged ?? new Date()).toLocaleDateString()}`}</h4>
        <form
          id="dashboardForm"
          className="page-dashboard-form"
          onChange={handleFormChange}
          onBlur={handleFormBlur}
        >
          <fieldset
            form="dashboardForm"
            className="page-dashboard-form-fieldset"
            disabled={isLoading}
          >
            <label
              className="page-dashboard-form-fieldset-label"
              htmlFor={enums.formInputsEnum.startDate}
            >
              Start date
              <input
                id={enums.formInputsEnum.startDate}
                type="date"
                className="page-dashboard-form-fieldset-label__input"
                defaultValue={payload.startDate}
              />
            </label>
            <label
              className="page-dashboard-form-fieldset-label"
              htmlFor={enums.formInputsEnum.endDate}
            >
              End date
              <input
                id={enums.formInputsEnum.endDate}
                type="date"
                className="page-dashboard-form-fieldset-label__input"
                defaultValue={payload.endDate}
              />
            </label>
            <label
              className="page-dashboard-form-fieldset-label"
              htmlFor={enums.formInputsEnum.searchTerm}
            >
              Search term
              <input
                id={enums.formInputsEnum.searchTerm}
                type="text"
                className="page-dashboard-form-fieldset-label__input"
                defaultValue={payload.searchTerm}
              />
            </label>
          </fieldset>
        </form>
      </section>
      <div className="pressRelease">
        {[...Array(data?.Releases?.length ?? 0).keys()].map((index) => {
          let src = data.Releases[index].Images[0]?.UrlTo200x200ArResized ?? null;
          let alt = data.Releases[index].Images[0]?.Title ?? null;

          if (src === null || alt === null) {
            src = data.Medias[index]?.UrlTo200x200ArResized ?? null;
            alt = data.Medias[index]?.Title ?? null;
          }

          const result = (
            <details key={data.Releases[index].Title} className="pressRelease-item">
              <summary className="pressRelease-item-title">
                <hgroup className="pressRelease-item-title-group">
                  <h4 className="pressRelease-item-title-group__header">Title</h4>
                  <p className="pressRelease-item-title-group__text">
                    {data.Releases[index].Title}
                  </p>
                </hgroup>
                <hgroup className="pressRelease-item-title-group">
                  <h4 className="pressRelease-item-title-group__header">Published date</h4>
                  <p className="pressRelease-item-title-group__text">
                    {new Date(data.Releases[index].PublishDate).toLocaleDateString()}
                  </p>
                </hgroup>
              </summary>
              <img
                id={`${index}.img`}
                src={src}
                alt={alt}
                className="pressRelease-item__img"
                onClick={handleImgClick}
              />
            </details>
          );

          return result;
        })}
      </div>
      <ButtonContainer title="Load more" onClick={handleLoadMore} isBottom />
      {isLoading && <span className="spinner" />}
    </article>
  );
}

export default PressReleasesPage;
